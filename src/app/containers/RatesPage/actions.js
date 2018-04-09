import { createAction } from 'redux-actions';
import sockets from '../../api/sockets';
import {
  INTENT_CONNECT,
  INTENT_DISCONNECT,
} from '../../middlewares/webSocketsMiddleware';
import {
  SELECTED_RATES_ON_CHANGE,
  TRUEFX_DATA_SUCCESS,
  CONNECT_TO_TRUEFX,
  DISCONNECT_FROM_TRUEFX,
} from './actionTypes';

const currencyPairsOnChange =
  createAction(SELECTED_RATES_ON_CHANGE, selectedRates => ({ selectedRates }));

const truefxDataSuccess =
  createAction(TRUEFX_DATA_SUCCESS, rates => ({ rates }));

const connectToTruefx =
  createAction(CONNECT_TO_TRUEFX, undefined, () => ({
    websocket: sockets.truefx.id,
    intent: INTENT_CONNECT,
    event: sockets.truefx.event,
    onEvent: truefxDataSuccess,
  }));

const disconnectFromTruefx =
  createAction(DISCONNECT_FROM_TRUEFX, undefined, () => ({
    websocket: sockets.truefx.id,
    intent: INTENT_DISCONNECT,
  }));

export {
  currencyPairsOnChange,
  connectToTruefx,
  disconnectFromTruefx,
};
