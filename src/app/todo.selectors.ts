import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodoState } from './todo.reducer';
import { TodoItem } from './todo.model';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);

// export const selectCompletedTodos = createSelector(
//   selectAllTodos,
//   todos => todos.filter(todo => todo.completed)
// );
