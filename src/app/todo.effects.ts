import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, delay, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { TodoActions } from './todo.actions';
import { TodoItem } from './todo.model';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() => {
        const mockTodos: TodoItem [] = [
          { id: '1', title: 'Learn NgRx', description: '', completed: false },
          { id: '2', title: 'Build app', description: '', completed: true },
        ];
        return of(mockTodos).pipe(
          delay(500), // simulate API
          map(todos => TodoActions.loadSuccess({ todos }))
        );
      })
    )
  );
}
