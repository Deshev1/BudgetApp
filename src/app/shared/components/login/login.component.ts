import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ToastMessageOptions } from 'primeng/api';

@Component({
  selector: 'bud-login',
  imports: [ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly messagesService = inject(MessageService);
  private readonly errorMessage: ToastMessageOptions = {
    text: '123 Incorrect username or password',
    severity: 'error',
  };
  readonly loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (!this.loginForm.valid) {
      this.messagesService.add(this.errorMessage);
    }

    this.authService.login();
  }
}
