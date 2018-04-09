export const INTENT_CONNECT = 'INTENT_CONNECT';
export const INTENT_DISCONNECT = 'INTENT_DISCONNECT';

// TODO: Handle connection problems, i.e. connection loss/failure,
// at the moment we keep attempting to reconnect
export default sockets => store => next => (action) => {
  const { meta } = action;
  if (meta && meta.websocket) {
    switch (meta.intent) {
      case INTENT_CONNECT: {
        sockets[meta.websocket].connect();
        sockets[meta.websocket].on(
          meta.event,
          data => store.dispatch(meta.onEvent(data)));
        break;
      }
      case INTENT_DISCONNECT: {
        sockets[meta.websocket].disconnect();
        sockets[meta.websocket].removeAllListeners();
        break;
      }
      default:
    }
  }

  return next(action);
};
