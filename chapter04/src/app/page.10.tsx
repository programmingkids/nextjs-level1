'use client';

import { useReducer } from "react";

type Count = {
  count:number;
}

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

const initCount:Count = {count: 0 };

function reducer(state: typeof initCount, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initCount);
  
  const handleClick = function(e:React.MouseEvent<HTMLButtonElement>) {
    dispatch({ type: e.target.name, payload: 2 });
  }
  
  return (
    <div className="text-center">
      <h1 className="title1">Work10</h1>
      <div>Count: {state.count}</div>
      <button 
        className="btn btn-blue" 
        name="increment"
        onClick={handleClick}
      >
        +
      </button>
      <button 
        className="btn btn-blue" 
        name="decrement"
        onClick={handleClick}
      >
        -
      </button>
    </div>
  );
};
