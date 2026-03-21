import {
  SupportedCurrencies,
  TransactionTypes,
} from '../constants/transaction.const';

export interface Transaction {
  id: string;
  currency: SupportedCurrencies;
  transactionType: TransactionTypes;
  title: string;
  amount: number;
  date: Date;
  includeTime: boolean;
  note?: string;
}

export type CreateTransaction = Omit<Transaction, 'id'>;
