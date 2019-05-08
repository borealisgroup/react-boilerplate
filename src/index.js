import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import * as serviceWorker from 'serviceWorker';
import { loadI18n } from 'i18n';

const renderReact = async () => {
  await loadI18n();
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderReact();

serviceWorker.register();
