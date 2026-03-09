import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'bud-root',
  imports: [RouterOutlet, ToastModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected title = 'BudgetApp';
}
