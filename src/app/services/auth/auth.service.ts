import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { APP_PATHS } from '../../constants/app.paths';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router);
  readonly isLoggedIn = signal(false);

  login() {
    this.isLoggedIn.set(true);
    this.router.navigate([APP_PATHS.dashboard]);
  }

  logout() {
    this.isLoggedIn.set(false);
  }
}
