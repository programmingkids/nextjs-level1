import { useReducer } from 'react';
import type { State, ReducerFunc, ItemContextType } from '@/types/Item';

// useReducerの結果を返すカスタムフック
export const useItemReducer = function (
  reducer: ReducerFunc,
  initState: State,
): ItemContextType {
  const [state, dispatch] = useReducer(reducer, initState);
  return { state, dispatch };
};
