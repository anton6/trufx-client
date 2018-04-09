import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import pure from 'recompose/pure';

const StyledRow = styled(Row)`
  border: 1px solid #ccc;
  font-weight: bold;
  cursor: default;
`;

const TableRatesHeader = () => (
  <StyledRow>
    <Col className="hidden-xs" sm={3}>CCY</Col>
    <Col className="hidden-xs" sm={3}>Time</Col>
    <Col xs={6} sm={3}>Bid</Col>
    <Col xs={6} sm={3}>Offer</Col>
  </StyledRow>
);

export default pure(TableRatesHeader);
