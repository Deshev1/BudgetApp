import { Component } from '@angular/core';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component';

@Component({
  selector: 'bud-dashboard',
  imports: [TransactionFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
