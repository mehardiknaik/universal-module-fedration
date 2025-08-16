import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import style from './Remote.module.css';

export interface RemoteProps {}

export const remote = ({ Component }: { Component: React.ComponentType<any> }) => () => {
  let root: ReturnType<typeof createRoot>;
  return {
    mount: (container: HTMLElement) => {
      root = createRoot(container);
      root.render(
        <div
          data-remote={__webpack_public_path__}
          data-build-date={__BUILD_DATE__}
          className={style.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        </div>
      );
    },
    unmount: () => {
      return root.unmount?.();
    }
  };
};
