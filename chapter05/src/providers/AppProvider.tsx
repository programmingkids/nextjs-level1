import { GlobalContext } from '@/providers/GlobalContext';
import { useItemReducer } from '@/providers/Hook';
import { items } from '@/components/Data';
import { reducer } from '@/providers/Store';

export const AppProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state, dispatch } = useItemReducer(reducer, { items });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
