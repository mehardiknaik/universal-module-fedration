import { loadRemote } from '@module-federation/enhanced/runtime';
import React, { useEffect } from 'react';

const RemoteInfo = () => {
  const [info, setInfo] = React.useState(null);

  useEffect(() => {
     loadRemote('remote/Info').then((module:any) => {
      setInfo(module.default);
    }).catch((error) => {
      console.error('Error loading remote module:', error);
    });
  }, []);

  return (
    <div>
      <h2>Remote Info</h2>
      {info && <pre>{JSON.stringify(info, null, 2)}</pre>}
    </div>
  );
};

export default RemoteInfo;
