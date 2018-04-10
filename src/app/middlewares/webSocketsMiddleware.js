import forEachObjIndexed from 'ramda/src/forEachObjIndexed';
import forEach from 'ramda/src/forEach';

export const INTENT_JOIN_ROOM = 'INTENT_JOIN_ROOM';
export const INTENT_LEAVE_ROOM = 'INTENT_LEAVE_ROOM';

export default sockets => (store) => {
  forEachObjIndexed((socket) => {
    socket.joinedRooms = new Map(); // eslint-disable-line no-param-reassign
    socket.rejoinRooms = // eslint-disable-line no-param-reassign
      () => forEach(joinRoom => joinRoom(), socket.joinedRooms);
    socket
      .on('connect_error', (/* error */) => {
        // TODO - dispatch error
        // store.dispatch();
      })
      .on('reconnect', (/* attemptNumber */) => {
        socket.rejoinRooms();
      });
  }, sockets);

  return next => (action) => {
    const { meta } = action;
    if (meta && meta.websocket) {
      switch (meta.intent) {
        case INTENT_JOIN_ROOM: {
          const joinRoom = () => {
            sockets[meta.websocket].emit('join', meta.room);
            sockets[meta.websocket].on(
              meta.event,
              data => store.dispatch(meta.onEvent(data)));
          };
          sockets[meta.websocket].joinedRooms.set(meta.room, joinRoom);
          joinRoom();
          break;
        }
        case INTENT_LEAVE_ROOM: {
          sockets[meta.websocket].emit('leave', meta.room);
          sockets[meta.websocket].removeAllListeners([meta.event]);
          sockets[meta.websocket].joinedRooms.delete(meta.room);
          break;
        }
        default:
      }
    }

    return next(action);
  };
};
