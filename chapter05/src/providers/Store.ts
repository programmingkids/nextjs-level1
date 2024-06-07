import type { Item, ActionType, State, ReducerFunc } from '@/types/Item';

export const reducer: ReducerFunc = function (
  state: State,
  action: ActionType,
): State {
  switch (action.type) {
    case 'add':
      return addItem(state, action.payload);
    case 'delete':
      return deleteItem(state, action.payload);
    default:
      return state;
  }
};

const addItem = function (state: State, { item }: { item: Item }) {
  return { items: state.items.concat(item) };
};

const deleteItem = function (state: State, { index }: { index: number }) {
  return {
    items: state.items.filter((v, i) => i !== index),
  };
};
