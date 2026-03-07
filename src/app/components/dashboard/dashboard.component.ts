import { Component, viewChild } from '@angular/core';

import { TransactionModalComponent } from '../transaction/transaction-modal/transaction-modal.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'bud-dashboard',
  imports: [TransactionModalComponent, Button],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly transactionModal = viewChild(TransactionModalComponent);

  openTransactionModal() {
    this.transactionModal()?.openModal();
  }
}
