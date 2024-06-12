import { Dispatch } from 'react';

// Todoのフォーム用
type TodoForm = {
  title: string;
  isComplete: boolean;
};

// 1個のTodo
type Todo = TodoForm & {
  id: number;
};

// 登録アクション用
type ActionTypeAdd = {
  type: 'add';
  payload: {
    todoForm: TodoForm;
  };
};

// 削除アクション用
type ActionTypeDelete = {
  type: 'delete';
  payload: {
    id: number;
  };
};

// 完了フラグの更新アクション用
type ActionTypeIsCompete = {
  type: 'toggleComplete';
  payload: {
    id: number;
  };
};

// リデューサ関数のアクションタイプ
type ActionType = ActionTypeAdd | ActionTypeDelete | ActionTypeIsCompete;

// コンテキストで管理するステート
type State = {
  todos: Todo[];
};

// コンテキストで管理するステートと更新用関数
type TodoContextType = {
  state: State;
  dispatch: Dispatch<ActionType>;
};

// リデューサ関数
type ReducerFunc = (state: State, action: ActionType) => State;

export type { TodoForm, Todo, ActionType, State, ReducerFunc, TodoContextType };
