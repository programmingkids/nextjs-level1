import { GlobalContext } from '@/providers/GlobalContext';
import { useContext } from 'react';

export const Stats = function () {
  const {
    state: { todos },
  } = useContext(GlobalContext);

  return (
    <div className="my-4">
      <div>Todo合計: {todos.length}</div>
      <div>Todo完了: {todos.filter((e) => e.isComplete).length}</div>
    </div>
  );
};
