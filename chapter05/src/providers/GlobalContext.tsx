import { createContext } from 'react';
import { type ItemContextType } from '@/types/Item';

export const GlobalContext = createContext<ItemContextType>({
  state: { items: [] },
  dispatch: () => {},
});
