import { createAction } from 'redux-actions';
import sockets from '../../api/sockets';
import {
  INTENT_JOIN_ROOM,
  INTENT_LEAVE_ROOM,
} from '../../middlewares/webSocketsMiddleware';
import {
  SELECTED_RATES_ON_CHANGE,
  TRUEFX_DATA_SUCCESS,
  SUBSCRIBE_TO_TRUEFX,
  UNSUBSCRIBE_FROM_TRUEFX,
} from './actionTypes';

const currencyPairsOnChange =
  createAction(SELECTED_RATES_ON_CHANGE, selectedRates => ({ selectedRates }));

const truefxDataSuccess =
  createAction(TRUEFX_DATA_SUCCESS, rates => ({ rates }));

const subscribeToTruefx =
  createAction(SUBSCRIBE_TO_TRUEFX, undefined, () => ({
    websocket: sockets.rates.id,
    intent: INTENT_JOIN_ROOM,
    room: sockets.rates.rooms.truefx.name,
    event: sockets.rates.rooms.truefx.event,
    onEvent: truefxDataSuccess,
  }));

const unsubscribeFromTruefx =
  createAction(UNSUBSCRIBE_FROM_TRUEFX, undefined, () => ({
    websocket: sockets.rates.id,
    intent: INTENT_LEAVE_ROOM,
    room: sockets.rates.rooms.truefx.name,
    event: sockets.rates.rooms.truefx.event,
  }));

export {
  currencyPairsOnChange,
  subscribeToTruefx,
  unsubscribeFromTruefx,
};
