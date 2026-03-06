import { CanActivateChildFn, createUrlTreeFromSnapshot } from '@angular/router';
import { APP_PATHS } from '../constants/app.paths';

export const authGuard: CanActivateChildFn = (childRoute) => {
  // Will be used once authentication is implemented.
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return createUrlTreeFromSnapshot(childRoute, ['../', APP_PATHS.noAccess]);
  }

  return true;
};
