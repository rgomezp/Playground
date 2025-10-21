import { IWalletAPI } from "../types/IWalletApi";
import { BASE_URL } from "../constants/api";
import { IWallet } from "../models/IWallet";
import { ITransaction } from "../models/ITransaction";
import { ApiError } from "../types/error/ApiError";
import { RetryConfig } from "../types/config/RetryConfig";
import { DEFAULT_RETRY_CONFIG } from "../constants/api";


export class WalletApi implements IWalletAPI {
  private baseURL = BASE_URL;
  private retryConfig: RetryConfig = DEFAULT_RETRY_CONFIG;

  /* P U B L I C   M E T H O D S */

  async getWallets(): Promise<IWallet[]> {
    const response = await this.fetchWithRetry(`${this.baseURL}/wallets`, {}, 'Fetching wallets');
    return response.json();
  }

  async addWallet(address: string): Promise<IWallet[]> {
    const response = await this.fetchWithRetry(`${this.baseURL}/wallets`, {
      method: 'POST',
      body: JSON.stringify({ address }),
      headers: {
        'Content-Type': 'application/json',
      },
    }, 'Adding wallet');
    return response.json();
  }

  async deleteWallet(walletId: string): Promise<void> {
    await this.fetchWithRetry(`${this.baseURL}/wallets/${walletId}`, {
      method: 'DELETE',
    }, 'Deleting wallet');
  }

  async getWalletTransactions(walletId: string): Promise<ITransaction[]> {
    const response = await this.fetchWithRetry(`${this.baseURL}/wallets/${walletId}`, {}, 'Fetching wallet transactions');
    return response.json();
  }

  async syncWallet(walletId: string): Promise<ITransaction[]> {
    const response = await this.fetchWithRetry(`${this.baseURL}/wallets/${walletId}/sync`, {
      method: 'POST',
    }, 'Syncing wallet');
    return response.json();
  }

  /* P R I V A T E   M E T H O D S */

    // Helper method to create user-friendly error messages
    private _getUserFriendlyMessage(status: number, errorMessage?: string): string {
      switch (status) {
        case 400:
          return errorMessage?.includes('already exists')
            ? 'This wallet address is already in your list. Please try a different address.'
            : 'Invalid request. Please check your input and try again.';
        case 404:
          return 'The requested wallet could not be found. It may have been deleted or moved.';
        case 500:
          return 'Our servers are experiencing issues. Please try again in a moment.';
        case 502:
        case 503:
        case 504:
          return 'The service is temporarily unavailable. Please try again later.';
        case 408:
          return 'The request timed out. Please check your connection and try again.';
        default:
          return 'Something went wrong. Please try again or contact support if the problem persists.';
      }
    }

    // Helper method to determine if an error should be retried
    private _shouldRetry(status: number): boolean {
      return this.retryConfig.retryableStatuses.includes(status);
    }

    // Helper method to calculate delay with exponential backoff
    private _calculateDelay(attempt: number): number {
      const delay = this.retryConfig.baseDelay * Math.pow(2, attempt - 1);
      return Math.min(delay, this.retryConfig.maxDelay);
    }

    // Generic fetch method with retry logic and error handling
    private async fetchWithRetry(
      url: string,
      options: RequestInit = {},
      operation: string = 'request'
    ): Promise<Response> {
      let lastError: Error | null = null;

      for (let attempt = 1; attempt <= this.retryConfig.maxRetries + 1; attempt++) {
        try {
          const response = await fetch(url, options);

          // If response is successful, return it
          if (response.ok) {
            return response;
          }

          // Parse error response
          let errorData;
          try {
            errorData = await response.json();
          } catch {
            errorData = { error: 'Unknown error occurred' };
          }

          const errorMessage = errorData.error || errorData.message || `HTTP ${response.status}`;
          const userMessage = this._getUserFriendlyMessage(response.status, errorMessage);

          // If this is the last attempt or error shouldn't be retried, throw error
          if (attempt === this.retryConfig.maxRetries + 1 || !this._shouldRetry(response.status)) {
            throw new ApiError(
              `${operation} failed: ${errorMessage}`,
              response.status,
              response.statusText,
              userMessage
            );
          }

          // Log retry attempt
          console.warn(`🔄 ${operation} failed (attempt ${attempt}/${this.retryConfig.maxRetries + 1}): ${response.status} ${response.statusText}. Retrying...`);

          // Wait before retry with exponential backoff
          const delay = this._calculateDelay(attempt);
          await new Promise(resolve => setTimeout(resolve, delay));

          lastError = new ApiError(
            `${operation} failed: ${errorMessage}`,
            response.status,
            response.statusText,
            userMessage
          );

        } catch (error) {
          // Network errors or other fetch failures
          if (attempt === this.retryConfig.maxRetries + 1) {
            const userMessage = 'Unable to connect to the server. Please check your internet connection and try again.';
            throw new ApiError(
              `${operation} failed: ${error instanceof Error ? error.message : 'Network error'}`,
              0,
              'Network Error',
              userMessage
            );
          }

          console.warn(`🔄 ${operation} network error (attempt ${attempt}/${this.retryConfig.maxRetries + 1}). Retrying...`);

          const delay = this._calculateDelay(attempt);
          await new Promise(resolve => setTimeout(resolve, delay));

          lastError = error instanceof Error ? error : new Error('Unknown network error');
        }
      }

      // This should never be reached, but just in case
      throw lastError || new Error('Unknown error occurred');
    }
}
