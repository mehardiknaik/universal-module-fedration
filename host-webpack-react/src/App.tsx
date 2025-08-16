import { init } from '@module-federation/enhanced/runtime';
import Hero from './components/Hero';
import Remote from './components/Remote';
import RemoteInfo from './components/RemoteInfo';

init({
  name: '@demo/app-main',
  remotes: [
    {
      name: '@demo/remote',
      entry: `${process.env.REMOTE_HOST}/mf-manifest.json?v=${Date.now()}`,
      alias: 'remote',
    }
  ]
});

const App = () => {
  return (
    <div>
      <Hero />
      <Remote />
      <RemoteInfo />
    </div>
  );
};

export default App;
