import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
