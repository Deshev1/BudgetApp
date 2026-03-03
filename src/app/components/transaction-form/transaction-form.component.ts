import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DatePickerModule } from 'primeng/datepicker';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TextareaModule } from 'primeng/textarea';

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
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  transactionOptions = ['Expense', 'Income'];
}
