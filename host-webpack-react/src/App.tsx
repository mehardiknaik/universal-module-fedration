import { init } from '@module-federation/enhanced/runtime';
import Hero from './components/Hero';
import Remote from './components/RemoteCounter';
import RemoteInfo from './components/RemoteInfo';
import RemotePage from './components/RemotePages';

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
      <RemotePage/>
    </div>
  );
};

export default App;
