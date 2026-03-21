import { CanActivateChildFn, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { APP_PATHS } from '../constants/app.paths';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (childRoute) => {
  const authService = inject(AuthService);

  if (!authService.isLoggedIn()) {
    return createUrlTreeFromSnapshot(childRoute, ['../', APP_PATHS.login]);
  }

  return true;
};
