/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import './styles';
import App from './app/App';
import configureStore from './app/configureStore';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

const history = createBrowserHistory();
const store = configureStore({ history });

// add theme, language providers here (if required)
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root,
);

registerServiceWorker();
