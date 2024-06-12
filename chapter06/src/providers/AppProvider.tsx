import { GlobalContext } from '@/providers/GlobalContext';
import { useTodoReducer } from '@/providers/Hook';
import { todos } from '@/components/Data';
import { reducer } from '@/providers/Store';

export const AppProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state, dispatch } = useTodoReducer(reducer, { todos });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
