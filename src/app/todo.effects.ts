import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { TodoActions } from './todo.actions';


@Injectable()
export class TodoEffects {

  // todoItemTodoss$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(TodoActions.todoItemTodos),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => TodoActions.todoItemTodossSuccess({ data })),
  //         catchError(error => of(TodoActions.todoItemTodossFailure({ error }))))
  //     )
  //   );
  // });


  constructor(private actions$: Actions) {}
}
