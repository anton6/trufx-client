import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import io from 'socket.io-client';
import createReducer from './reducers';
import createWebSocketMiddleware from './middlewares/webSocketsMiddleware';
import sockets from './api/sockets';

const socketMiddleware = createWebSocketMiddleware({
  // prevent from automatic connection to the socket
  [sockets.truefx.id]: io(sockets.truefx.url).disconnect(),
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
