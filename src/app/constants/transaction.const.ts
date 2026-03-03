import { TransactionForm } from '../models/transaction.models';

export const MIN_TRANSACTION_AMOUNT = 0.01;
export const MIN_TITLE_LENGTH = 1;

export const SUPPORTED_CURRENCIES = {
  eur: 'EUR',
  usd: 'USD',
} as const;

export const TRANSACTION_TYPES = {
  income: 'INCOME',
  expense: 'EXPENSE',
} as const;

export type SupportedCurrencies =
  (typeof SUPPORTED_CURRENCIES)[keyof typeof SUPPORTED_CURRENCIES];

export type TransactionTypes =
  (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES];

export const currencyOptions = Object.values(SUPPORTED_CURRENCIES);
export const transactionOptions = Object.values(TRANSACTION_TYPES);

export const transactionFormDefaults: TransactionForm = {
  currency: SUPPORTED_CURRENCIES.eur,
  type: TRANSACTION_TYPES.income,
  title: '',
  amount: 0,
  date: new Date(),
  includeTime: false,
  note: '',
};
