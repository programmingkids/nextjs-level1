import { useReducer } from 'react';
import type { State, ReducerFunc, TodoContextType } from '@/types/Todo';

// useReducerの結果を返すカスタムフック
export const useTodoReducer = function (
  reducer: ReducerFunc,
  initState: State,
): TodoContextType {
  const [state, dispatch] = useReducer(reducer, initState);
  return { state, dispatch };
};
