import { Component, signal } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component';

@Component({
  selector: 'bud-transaction-modal',
  imports: [DialogModule, ButtonModule, TransactionFormComponent],
  templateUrl: './transaction-modal.component.html',
  styleUrl: './transaction-modal.component.scss',
})
export class TransactionModalComponent {
  readonly isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
