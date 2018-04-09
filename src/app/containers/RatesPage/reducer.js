import { handleActions } from 'redux-actions';
import {
  TRUEFX_DATA_SUCCESS,
  SELECTED_RATES_ON_CHANGE,
} from './actionTypes';

export const STORE_KEY = 'fxdata';

const initialState = {
  selectedRates: [],
  rates: [],
};

function currencyPairsOnChange(state, action) {
  return {
    ...state,
    selectedRates: action.payload.selectedRates,
  };
}

function truefxDataSuccess(state, action) {
  return {
    ...state,
    rates: action.payload.rates,
  };
}

export default handleActions({
  [SELECTED_RATES_ON_CHANGE]: currencyPairsOnChange,
  [TRUEFX_DATA_SUCCESS]: truefxDataSuccess,
}, initialState);
