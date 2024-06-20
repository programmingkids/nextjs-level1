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
  // switchの分岐処理にcaseを追加する
  switch (action.type) {
    default:
      return state;
  }
};

// 完成済み
const addTodo = function (state: State, { todoForm }: { todoForm: TodoForm }) {
  const { id } = state.todos.reduce((p, e) => (p.id > e.id ? p : e), { id: 0 });
  const todo: Todo = { ...todoForm, id: id + 1 };
  return {
    ...state,
    todos: state.todos.concat([todo]),
  };
};

// 完成済み
const deleteTodo = function (state: State, { id }: { id: number }) {
  return {
    ...state,
    todos: state.todos.filter((e) => e.id !== id),
  };
};

// 完成済み
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
