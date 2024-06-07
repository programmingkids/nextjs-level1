import { Dispatch } from 'react';

// 1個のアイテム
type Item = {
  name: string;
  price: string;
  amount: string;
};

// 登録アクション用
type ActionTypeAdd = {
  type: 'add';
  payload: {
    item: Item;
  };
};

// 削除アクション用
type ActionTypeDelete = {
  type: 'delete';
  payload: {
    index: number;
  };
};

// リデューサ関数のアクションタイプ
type ActionType = ActionTypeAdd | ActionTypeDelete;

// コンテキストで管理するステート
type State = {
  items: Item[];
};

// コンテキストで管理するステートと更新用関数
type ItemContextType = {
  state: State;
  dispatch: Dispatch<ActionType>;
};

// リデューサ関数
type ReducerFunc = (state: State, action: ActionType) => State;

export type { Item, ActionType, State, ReducerFunc, ItemContextType };
