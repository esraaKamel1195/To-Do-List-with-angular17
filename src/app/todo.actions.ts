import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TodoItem } from './todo.model';

export const TodoActions = createActionGroup({
  source: 'Todo/API',
  events: {
    'Load Todos': props<{ todos: TodoItem[] }>(),
    'Add Todo': props<{ todo: TodoItem }>(),
    'Upsert Todo': props<{ todo: TodoItem }>(),
    'Add Todos': props<{ todos: TodoItem[] }>(),
    'Upsert Todos': props<{ todos: TodoItem[] }>(),
    'Update Todo': props<{ todo: Update<TodoItem> }>(),
    'Update Todos': props<{ todos: Update<TodoItem>[] }>(),
    'Delete Todo': props<{ id: string }>(),
    'Delete Todos': props<{ ids: string[] }>(),
    'Clear Todos': emptyProps(),
  }
});
