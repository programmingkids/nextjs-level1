import type {
  Todo,
  TodoForm,
  ActionType,
  State,
  ReducerFunc,
} from '@/types/Todo';

export const reducer: ReducerFunc = function (
  state: State,
  action: ActionType,
): State {
  switch (action.type) {
    case 'add':
      return addTodo(state, action.payload);
    case 'delete':
      return deleteTodo(state, action.payload);
    case 'toggleComplete':
      return toggleTodoComplete(state, action.payload);

    default:
      return state;
  }
};

const addTodo = function (state: State, { todoForm }: { todoForm: TodoForm }) {
  const { id } = state.todos.reduce((p, e) => (p.id > e.id ? p : e), { id: 0 });
  const todo: Todo = { ...todoForm, id: id + 1 };
  return {
    ...state,
    todos: state.todos.concat([todo]),
  };
};

const deleteTodo = function (state: State, { id }: { id: number }) {
  return {
    ...state,
    todos: state.todos.filter((e) => e.id !== id),
  };
};

const toggleTodoComplete = function (state: State, { id }: { id: number }) {
  return {
    ...state,
    todos: state.todos.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          isComplete: !e.isComplete,
        };
      }
      return e;
    }),
  };
};
