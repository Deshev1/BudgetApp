import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { APP_PATHS } from './constants/app.paths';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NoAccessComponent } from './shared/components/no-access/no-access.component';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `${APP_PATHS.dashboard}`,
      },
      { path: `${APP_PATHS.dashboard}`, component: DashboardComponent },
    ],
  },
  { path: APP_PATHS.noAccess, component: NoAccessComponent },
  { path: '**', component: NotFoundComponent },
];
