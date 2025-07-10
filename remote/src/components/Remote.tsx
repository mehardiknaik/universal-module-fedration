import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import style from './Remote.module.css';
import Counter from './Counter';

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
          <h1>Remote Component</h1>
          <Counter />
        </div>
      );
    },
    unmount: () => {
      return root.unmount?.();
    }
  };
};
