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
  // useContextでGlobalContextからtodosを取り出す
  // <tbody>の内側でmap処理を行い、TodoBoxを呼び出す

  return <tbody></tbody>;
};

const TodoBox = function ({ todo: { id, title, isComplete } }: TodoProps) {
  // useContextでGlobalContextからdispatchを取り出す

  const handleClickDelete = function (id: number) {
    // 削除ボタンをクリックしたときの処理
    // dispatchを呼び出す
    // type = delete, payload { number }
  };

  const handleClickToggleComplete = function (id: number) {
    // 完了 / 未完了ボタンをクリックしたときの処理
    // dispatchを呼び出す
    // type = toggleComplete, payload { number }
  };

  // JSXで「削除」ボタンを配置
  // クリックしたら「handleClickDelete」を呼び出す
  // JSXで「完了」「未完了」のボタンを配置
  // クリックしたら、「handleClickToggleComplete」を呼び出す
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{isComplete ? '完了' : '未完了'}</td>
      <td></td>
    </tr>
  );
};
