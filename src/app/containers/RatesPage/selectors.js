import path from 'ramda/src/path';
import filter from 'ramda/src/filter';
import contains from 'ramda/src/contains';
import pluck from 'ramda/src/pluck';
import map from 'ramda/src/map';
import zipObj from 'ramda/src/zipObj';
import ifElse from 'ramda/src/ifElse';
import isEmpty from 'ramda/src/isEmpty';

import { createSelector } from 'reselect';
import { STORE_KEY } from './reducer';

export const getSelectedRates = path([STORE_KEY, 'selectedRates']);
export const getRates = path([STORE_KEY, 'rates']);

export const getCurrencyPairs = createSelector(
  getRates, pluck('currencyPair'));

export const getCurrencyValueLabelPairs = createSelector(
  getCurrencyPairs, map(value => zipObj(['value', 'label'], [value, value])));

export const getFilteredRates = createSelector(
  [getSelectedRates, getRates],
  (selectedRates, rates) =>
    ifElse(
      isEmpty,
      () => rates,
      () =>
        filter(record =>
          contains(record.currencyPair, pluck('value', selectedRates)))(rates),
    )(selectedRates),
);
