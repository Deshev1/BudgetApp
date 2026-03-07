import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DatePickerModule } from 'primeng/datepicker';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TextareaModule } from 'primeng/textarea';

import {
  transactionOptions,
  currencyOptions,
  transactionFormDefaults,
  MIN_TRANSACTION_AMOUNT,
  MIN_TITLE_LENGTH,
  SupportedCurrencies,
  TransactionTypes,
} from '../../../constants/transaction.const';

@Component({
  selector: 'bud-transaction-form',
  imports: [
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    SelectButtonModule,
    DatePickerModule,
    ToggleSwitchModule,
    TextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  private readonly fb = inject(FormBuilder);
  readonly transactionOptions: TransactionTypes[] = transactionOptions;
  readonly currencyOptions: SupportedCurrencies[] = currencyOptions;
  currentDate: Date = new Date();

  readonly transactionForm = this.fb.group({
    currency: [transactionFormDefaults.currency, Validators.required],
    type: [transactionFormDefaults.type, Validators.required],
    title: [
      transactionFormDefaults.title,
      [Validators.required, Validators.minLength(MIN_TITLE_LENGTH)],
    ],
    amount: [
      transactionFormDefaults.amount,
      [Validators.required, Validators.min(MIN_TRANSACTION_AMOUNT)],
    ],
    date: [transactionFormDefaults.date, Validators.required],
    includeTime: [transactionFormDefaults.includeTime, Validators.required],
    note: transactionFormDefaults.note,
  });

  submitForm() {
    this.transactionForm.markAllAsTouched();
    this.transactionForm.markAllAsDirty();

    console.info(this.transactionForm.value);

    if (this.transactionForm.valid) {
      this.transactionForm.reset(transactionFormDefaults);
    }
  }
}
