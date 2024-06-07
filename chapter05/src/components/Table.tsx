import { useContext } from 'react';
import { type Item } from '@/types/Item';
import { GlobalContext } from '@/providers/GlobalContext';

type ItemProps = {
  item: Item;
  index: number;
};

export const TableBox = function () {
  return (
    <table className="dataTable">
      <TableHeader />
      <TableBody />
    </table>
  );
};

const TableHeader = function () {
  return (
    <thead>
      <tr>
        <th>商品</th>
        <th>金額</th>
        <th>個数</th>
        <th>小計</th>
        <th>削除</th>
      </tr>
    </thead>
  );
};

const TableBody = function () {
  const {
    state: { items },
  } = useContext(GlobalContext);

  return (
    <tbody>
      {items.map((item, index) => (
        <ItemBox item={item} index={index} key={index} />
      ))}
    </tbody>
  );
};

const ItemBox = function ({ item: { name, price, amount }, index }: ItemProps) {
  const { dispatch } = useContext(GlobalContext);

  const handleClick = function (index: number) {
    dispatch({
      type: 'delete',
      payload: {
        index,
      },
    });
  };

  return (
    <tr key={index}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{Number(price) * Number(amount)}</td>
      <td>
        <button className="btn-sm btn-red" onClick={(e) => handleClick(index)}>
          削除
        </button>
      </td>
    </tr>
  );
};
