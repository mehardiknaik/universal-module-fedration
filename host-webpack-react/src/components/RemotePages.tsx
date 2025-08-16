import React, { useEffect, useRef } from 'react';

import { init, loadRemote } from '@module-federation/enhanced/runtime';

const Remote = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mod: any = null;
    loadRemote('remote/Router')
      .then(({ default: remote }: any) => {
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
