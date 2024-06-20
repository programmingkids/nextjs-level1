import { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '@/providers/GlobalContext';
import { initTodo } from '@/components/Data';

export const FormControl = function () {
  const { dispatch } = useContext(GlobalContext);
  const [todoForm, setTodoForm] = useState(initTodo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>): void {
    setTodoForm((i) => ({
      ...i,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = function (e: React.MouseEvent<HTMLButtonElement>): void {
    // 新規追加アクション
    // dispatchを呼び出す　type = add, payload = { todoForm }
    // todoFormの初期化
    // フォーカスの設定
  };

  useEffect(() => {
    // Todoにフォーカス適用
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          className="form-control"
          value={todoForm.title}
          onChange={handleChange}
          placeholder="Todo"
          ref={inputRef}
        />
      </div>
      <div>
        <button className="btn btn-blue" onClick={handleClick}>
          新規登録
        </button>
      </div>
    </>
  );
};
