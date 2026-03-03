import {
  SupportedCurrencies,
  TransactionTypes,
} from '../constants/transaction.const';

export interface TransactionForm {
  currency: SupportedCurrencies;
  type: TransactionTypes;
  title: string;
  amount: number;
  date: Date;
  includeTime: boolean;
  note: string;
}
