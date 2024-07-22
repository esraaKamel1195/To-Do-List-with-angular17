import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.route').then((m) => m.authRoute),
  },
  {
    path: '',
    loadComponent: () =>
      import('./to-do-list/to-do-list.component').then(
        (c) => c.ToDoListComponent
      ),
  },
  {
    path: 'list',
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
