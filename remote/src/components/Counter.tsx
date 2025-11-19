import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './Counter.module.css';
import { remote } from './Remote';

export interface CustomData {
  count: number;
}

export const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const emitEvent = (detail: CustomData) => {
    const event = new CustomEvent<CustomData>('build', { detail, bubbles: true });
    ref.current!.dispatchEvent(event);
  };
  const increment = () => {
    setCount((num) => {
      const count = num + 1;
      emitEvent({ count });
      return count;
    });
  };

  useEffect(() => {
    const timer=setInterval(() => {
      console.log('Counter is running');
    }, 1000);
    emitEvent({ count });
    return () => clearInterval(timer);
  }, []);
  return (
    <div ref={ref} className={style.container}>
      <div>
        Count:{' '}
        <div key={count} className={style.count}>
          {count}
        </div>
      </div>
      <button autoFocus onClick={increment}>
        Increment
      </button>
    </div>
  );
};
export default remote({ Component: Counter });
