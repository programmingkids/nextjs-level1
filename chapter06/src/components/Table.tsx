import { useContext } from 'react';
import { type Todo } from '@/types/Todo';
import { GlobalContext } from '@/providers/GlobalContext';

type TodoProps = {
  todo: Todo;
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
        <th>ID</th>
        <th>Todo</th>
        <th>完了</th>
        <th>管理</th>
      </tr>
    </thead>
  );
};

const TableBody = function () {
  const {
    state: { todos },
  } = useContext(GlobalContext);

  return (
    <tbody>
      {todos.map((e) => (
        <TodoBox todo={e} key={e.id} />
      ))}
    </tbody>
  );
};

const TodoBox = function ({ todo: { id, title, isComplete } }: TodoProps) {
  const { dispatch } = useContext(GlobalContext);

  const handleClickDelete = function (id: number) {
    dispatch({
      type: 'delete',
      payload: {
        id,
      },
    });
  };

  const handleClickToggleComplete = function (id: number) {
    dispatch({
      type: 'toggleComplete',
      payload: {
        id,
      },
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{isComplete ? '完了' : '未完了'}</td>
      <td>
        <button
          className="btn-sm btn-green"
          onClick={(e) => handleClickToggleComplete(id)}
        >
          {!isComplete ? '完了' : '未完了'}
        </button>
        <button
          className="btn-sm btn-red"
          onClick={(e) => handleClickDelete(id)}
        >
          削除
        </button>
      </td>
    </tr>
  );
};
