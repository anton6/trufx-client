import React from 'react';
import PropTypes from 'prop-types';

import pure from 'recompose/pure';
import map from 'ramda/src/map';
import values from 'ramda/src/values';

import { Grid } from 'react-flexbox-grid';
import TableRatesHeader from './TableRatesHeader';
import TableRatesRow from './TableRatesRow';

const TableRates = ({ rates }) => (
  <Grid fluid>
    <TableRatesHeader />
    {map(rate =>
      <TableRatesRow key={rate.currencyPair} data={rate} />, values(rates))}
  </Grid>
);

TableRates.defaultProps = {
  rates: [],
};

TableRates.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.object),
};

export default pure(TableRates);
