import { Routes } from '@angular/router';

export const authRoute: Routes = [
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./authentication.component').then(
        (c) => c.AuthenticationComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./authentication.component').then(
        (c) => c.AuthenticationComponent
      ),
  },
];
