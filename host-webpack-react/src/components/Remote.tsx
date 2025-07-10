import React, { useEffect, useRef } from 'react';

import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: '@demo/app-main',
  remotes: [
    {
      name: '@demo/app2',
      entry: `${process.env.REMOTE_HOST}/mf-manifest.json`,
      alias: 'app2'
    }
  ]
});

const Remote = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mod: any = null;
    loadRemote('app2/App')
      .then(({ remote }: any) => {
        mod = remote();
        mod?.mount?.(ref.current);
      })
      .catch(() => {
        if (ref.current) {
          ref.current.innerText = 'Error loading remote module';
        }
        console.error('Error loading remote module');
      });
    return () => mod?.unmount?.();
  }, []);
  return <div ref={ref}>Loading....</div>;
};

export default Remote;
