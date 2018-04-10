import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import io from 'socket.io-client';
import createReducer from './reducers';
import createWebSocketMiddleware from './middlewares/webSocketsMiddleware';
import sockets from './api/sockets';

// TODO: Handle connection problems, i.e. connection loss/failure,
// at the moment we just keep attempting to reconnect
const socketMiddleware = createWebSocketMiddleware({
  [sockets.rates.id]: io(sockets.rates.url),
});

export default function configureStore({ initialState = {}, history }) {
  const middlewares = [
    socketMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers),
  );

  store.injectedReducers = {};

  return store;
}
