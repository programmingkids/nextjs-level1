'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [display, setDisplay] = useState(true);
  
  const handleToggleDisplay = function(e:React.MouseEvent<HTMLButtonElement>):void {
    setDisplay(v => !v);
  };
  
  return (
    <div className="text-center">
      <h1 className="title1">Work09</h1>
      <button className="btn btn-blue" onClick={handleToggleDisplay}>表示切替</button>
      {display && <CountBox />}
    </div>
  );
}

const CountBox = function() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
    
    return () => {
      setCount(0);
      clearInterval(timerID);
    };
  },[]);
  
  return <div>カウント：{count}</div>;
}
