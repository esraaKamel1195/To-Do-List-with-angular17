import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { TodoItem } from './todo.model';

export const TodoActions = createActionGroup({
  source: 'Todo/API',
  events: {
    'Load Todos': emptyProps(),
    'Load Success': props<{ todos: TodoItem[] }>(),
    // 'Add Todo': props<{ todo: TodoItem }>(),
    'Add Todo': props<{ title: string }>(),
    'Upsert Todo': props<{ todo: TodoItem }>(),
    'Add Todos': props<{ todos: TodoItem[] }>(),
    'Upsert Todos': props<{ todos: TodoItem[] }>(),
    'Update Todo': props<{ todo: Update<TodoItem> }>(),
    'Update Todos': props<{ todos: Update<TodoItem>[] }>(),
    'Delete Todo': props<{ id: string }>(),
    'Delete Todos': props<{ ids: string[] }>(),
    'Clear Todos': emptyProps(),
    'Toggle': props<{ id: string }>()
  }
});

// export const addTodo = createAction('[Todo] Add', props<{ title: string }>());
// export const toggleTodo = createAction('[Todo] Toggle', props<{ id: string }>());
// export const loadTodos = createAction('[Todo] Load');
// export const loadTodosSuccess = createAction('[Todo] Load Success', props<{ todos: TodoItem[] }>());
