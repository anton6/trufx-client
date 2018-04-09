import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  margin: 0.5em;
`;

const SelectRates = ({
  currencyPairsOnChange,
  selectedRates,
  currencyValueLabelPairs,
}) => (
  <StyledSelect
    multi
    placeholder="Filter by currency pairs"
    options={currencyValueLabelPairs}
    value={selectedRates}
    onChange={currencyPairsOnChange}
  />
);

SelectRates.defaultProps = {
  selectedRates: [],
  currencyValueLabelPairs: [],
};

SelectRates.propTypes = {
  currencyPairsOnChange: PropTypes.func.isRequired,
  selectedRates: PropTypes.arrayOf(PropTypes.object),
  currencyValueLabelPairs: PropTypes.arrayOf(PropTypes.object),
};

export default pure(SelectRates);
