import { ITransaction } from "../models/ITransaction";
import { IWallet } from "../models/IWallet";

export interface IWalletAPI {
  getWallets(): Promise<IWallet[]>;
  addWallet(address: string): Promise<IWallet[]>;
  deleteWallet(walletId: string): Promise<void>;
  getWalletTransactions(walletId: string): Promise<ITransaction[]>;
  syncWallet(walletId: string): Promise<ITransaction[]>;
}
