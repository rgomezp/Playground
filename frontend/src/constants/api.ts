import { RetryConfig } from "../types/config/RetryConfig";

const BASE_URL = 'http://localhost:4001';

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  baseDelay: 1000, // 1 second
  maxDelay: 10000, // 10 seconds
  retryableStatuses: [500, 502, 503, 504, 408] // Server errors and timeout
};

export { BASE_URL, DEFAULT_RETRY_CONFIG };
