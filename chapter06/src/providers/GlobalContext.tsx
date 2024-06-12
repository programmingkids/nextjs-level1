import { createContext } from 'react';
import { type TodoContextType } from '@/types/Todo';

export const GlobalContext = createContext<TodoContextType>({
  state: {
    todos: [],
  },
  dispatch: () => {},
});
