import style from './App.module.css';
import webpackLogo from './assets/webpack.png';
import {Counter} from './components/Counter';

const App = () => {
  return (
    <div className={style.container}>
      <div>
        React <u>{process.env.APP_NAME}</u> <code>{process.env.NODE_ENV}</code>
      </div>
      <div>
        App Name: <code>{window?.__env?.NAME}</code>
      </div>
      <div>
        Build Created At: <code>{__BUILD_DATE__}</code>
      </div>
      <div>
        Is Dev: <code>{__DEV__ ? 'True' : 'False'}</code>
      </div>
      <div>
        Is Prod: <code>{__PROD__ ? 'True' : 'False'}</code>
      </div>
      <div>
        Public Path: <code>{__webpack_public_path__}</code>
      </div>
      <div className={style['logo-container']}>
        <img src="./react.svg" alt="React Logo" className={style.react} />
        <img src={webpackLogo} alt="Webpack Logo" className={style.webpack} />
      </div>
      <Counter/>
    </div>
  );
};

export default App;
