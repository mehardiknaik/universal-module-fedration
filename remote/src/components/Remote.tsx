import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import style from './Remote.module.css';
import Counter from './Counter';
import logo from '../assets/remote.svg';

export const remote = () => {
  let root: ReturnType<typeof createRoot>;
  return {
    mount: (container: HTMLElement) => {
      root = createRoot(container);
      root.render(
        <div
          data-remote={__webpack_public_path__}
          data-build-date={__BUILD_DATE__}
          className={style.container}>
          <div className={style.header}>
            <h1>Remote Component</h1>
            <img src={logo} alt="Remote" className={style.logo} />
          </div>
          <Counter />
        </div>
      );
    },
    unmount: () => {
      return root.unmount?.();
    }
  };
};
