'use client';

import { useState } from 'react';

export default function Home() {
  // generics
  const [count, setCount] = useState<number>(0);
  // no generics
  // const [count, setCount] = useState(0);

  const handleClickUp = function (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void {
    setCount((c) => c + 1);
  };

  const handleClickDown = function (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void {
    setCount((c) => c - 1);
  };

  const handleClickReset = function (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void {
    setCount(0);
  };

  return (
    <div className="text-center">
      <h1 className="title1">Work07</h1>
      <div className="my-2 text-lg">{count}</div>
      <button className="btn btn-blue" onClick={handleClickUp}>Up</button>
      <button className="btn btn-blue" onClick={handleClickReset}>Reset</button>
      <button className="btn btn-blue" onClick={handleClickDown}>Down</button>
    </div>
  );
}
