import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

const DeltaIndicator = ({ val }) => {
  if (!val) return null;
  if (val > 0) return <span style={{ color: 'green' }}>&uarr;</span>;
  return <span style={{ color: 'red' }}>&darr;</span>;
};

DeltaIndicator.defaultProps = {
  val: 0,
};

DeltaIndicator.propTypes = {
  val: PropTypes.number,
};

export default pure(DeltaIndicator);
