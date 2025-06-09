import { Routes } from '@angular/router';
import { canActivateGuard } from './authentication/guards/can-activate.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.route').then((m) => m.authRoute),
  },
  {
    path: '',
    canActivate: [canActivateGuard],
    loadComponent: () =>
      import('./to-do-list/to-do-list.component').then(
        (c) => c.ToDoListComponent
      ),
  },
  {
    path: 'list',
    canActivate: [canActivateGuard],
    loadComponent: () =>
      import('./to-do-list/to-do-list.component').then(
        (c) => c.ToDoListComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
  },
];
