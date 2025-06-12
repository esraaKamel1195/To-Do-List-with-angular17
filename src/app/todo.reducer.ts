import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TodoItem } from './todo.model';
import { TodoActions } from './todo.actions';
import { v4 as uuidv4 } from 'uuid';

export const todosFeatureKey = 'todos';

export interface TodoState extends EntityState<TodoItem> {
  // additional entities state properties
  todos: TodoItem[];
}

// export interface TodoState {
//   todos: TodoItem[];
// }

export const adapter: EntityAdapter<TodoItem> = createEntityAdapter<TodoItem>();

export const initialState: TodoState = adapter.getInitialState({
  // additional entity state properties
  todos: [],
});

// const initialState: TodoState = {
//   todos: [],
// };

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, action) =>
    adapter.addOne({ id: uuidv4(), title: action.title, completed: false }, state)
  ),
  on(TodoActions.upsertTodo, (state, action) =>
    adapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.addTodos, (state, action) =>
    adapter.addMany(action.todos, state)
  ),
  on(TodoActions.upsertTodos, (state, action) =>
    adapter.upsertMany(action.todos, state)
  ),
  on(TodoActions.updateTodo, (state, action) =>
    adapter.updateOne(action.todo, state)
  ),
  on(TodoActions.updateTodos, (state, action) =>
    adapter.updateMany(action.todos, state)
  ),
  on(TodoActions.deleteTodo, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodos, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  // on(TodoActions.loadTodos, (state, action) =>
  //   adapter.setAll(action.todos, state)
  // ),
  on(TodoActions.clearTodos, (state) => adapter.removeAll(state)),

  on(TodoActions.toggle, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
  on(TodoActions.loadSuccess, (state, { todos }) => ({ ...state, todos }))
);

export const todosFeature = createFeature({
  name: todosFeatureKey,
  reducer,
  extraSelectors: ({ selectTodosState }) => ({
    ...adapter.getSelectors(selectTodosState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  todosFeature;

// export const todoReducer = createReducer(
//   initialState,
//   on(TodoActions.addTodo, (state, { title }) => ({
//     ...state,
//     todos: [...state.todos, { id: uuidv4(), title, completed: false }],
//   })),
//   on(TodoActions.toggleTodo, (state, { id }) => ({
//     ...state,
//     todos: state.todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ),
//   })),
//   on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos }))
// );
