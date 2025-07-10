import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './Counter.module.css';

export interface CounterProps {
  callBack: (count: number) => void;
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => {
      const detail = count + 1;
      const event = new CustomEvent('build', { detail });
      document.dispatchEvent(event);
      return detail;
    });
  };

  useEffect(() => {
    const event = new CustomEvent('build', { detail: count });
    document.dispatchEvent(event);
  }, []);
  return (
    <div className={style.container}>
      <div>Count: {count}</div>
      <button autoFocus onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
