import { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '@/providers/GlobalContext';
import { initItem } from '@/components/Data';

export const FormControl = function () {
  const { dispatch } = useContext(GlobalContext);
  const [item, setItem] = useState(initItem);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>): void {
    setItem((i) => ({
      ...i,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = function (e: React.MouseEvent<HTMLButtonElement>): void {
    // 新規追加アクション
    dispatch({
      type: 'add',
      payload: {
        item,
      },
    });
    // フォームの初期化
    setItem(initItem);
    // 商品にフォーカス適用
    inputRef.current?.focus();
  };

  useEffect(() => {
    // 商品にフォーカス適用
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          className="form-control"
          value={item.name}
          onChange={handleChange}
          placeholder="商品"
          ref={inputRef}
        />
      </div>
      <div>
        <input
          type="number"
          name="price"
          className="form-control"
          value={item.price}
          onChange={handleChange}
          placeholder="金額"
        />
      </div>
      <div>
        <input
          type="number"
          name="amount"
          className="form-control"
          value={item.amount}
          onChange={handleChange}
          placeholder="個数"
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
