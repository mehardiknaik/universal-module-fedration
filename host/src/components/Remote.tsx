import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Counter';

export const remote = () => {
  let root: ReturnType<typeof createRoot>;
  return {
    mount: (container: HTMLElement) => {
      root = createRoot(container);
      root.render(
        <div data-remote={__webpack_public_path__} data-build-date={__BUILD_DATE__}>
          <Counter />
        </div>
      );
    },
    unmount: () => {
      return root.unmount?.();
    }
  };
};
