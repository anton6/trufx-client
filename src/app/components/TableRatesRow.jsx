import React from 'react';
import PropTypes from 'prop-types';

import format from 'date-fns/format';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import pure from 'recompose/pure';
import lifecycle from 'recompose/lifecycle';

import DeltaIndicator from './DeltaIndicator';

const StyledRow = styled(Row)`
  border: 1px solid #ccc;
  border-top: none;
`;

const StyledCol = styled(Col)`
  background-color: ${({ isChanged }) => isChanged && '#EEE'};
`.withComponent(({ isChanged, ...rest }) => <Col xs={6} sm={3} {...rest} />);

StyledCol.propTypes = {
  isChanged: PropTypes.bool,
};

const FORMAT = 'HH:mm:ss:SSS';
const TableRatesRow = ({
  isBidChanged,
  bidDelta,
  isOfferChanged,
  offerDelta,
  data,
}) => (
  <StyledRow>
    <StyledCol>
      {data.currencyPair}
    </StyledCol>
    <StyledCol>
      {format(new Date(data.timestamp), FORMAT)}
    </StyledCol>
    <StyledCol isChanged={isBidChanged}>
      {data.bidBig}<sup>{data.bidPoints}</sup>
      <DeltaIndicator val={bidDelta} />
    </StyledCol>
    <StyledCol isChanged={isOfferChanged}>
      {data.offerBig}<sup>{data.offerPoints}</sup>
      <DeltaIndicator val={offerDelta} />
    </StyledCol>
  </StyledRow>
);

TableRatesRow.defaultProps = {
  isBidChanged: false,
  bidDelta: 0,
  isOfferChanged: false,
  offerDelta: 0,
};

TableRatesRow.propTypes = {
  isBidChanged: PropTypes.bool,
  bidDelta: PropTypes.number,
  isOfferChanged: PropTypes.bool,
  offerDelta: PropTypes.number,
  data: PropTypes.shape({
    bidBig: PropTypes.string,
    bidPoints: PropTypes.string,
    currencyPair: PropTypes.string,
    high: PropTypes.string,
    low: PropTypes.string,
    offerBig: PropTypes.string,
    offerPoints: PropTypes.string,
    open: PropTypes.string,
    timestamp: PropTypes.number,
  }).isRequired,
};

const TableRatesRowStateful =
  lifecycle({
    state: {
      bidDelta: 0,
      isBidChanged: false,
      offerDelta: 0,
      isOfferChanged: false,
    },
    componentWillReceiveProps(nextProps) {
      const {
        bidBig: prevBidBig,
        bidPoints: prevBidPoints,
        offerBig: prevOfferBig,
        offerPoints: prevOfferPoints,
      } = this.props.data;
      const {
        bidBig: nextBidBig,
        bidPoints: nextBidPoints,
        offerBig: nextOfferBig,
        offerPoints: nextPoints,
      } = nextProps.data;
      const bidDelta = (nextBidBig + nextBidPoints) - (prevBidBig + prevBidPoints);
      const offerDelta = (nextOfferBig + nextPoints) - (prevOfferBig + prevOfferPoints);
      this.setState({
        bidDelta: bidDelta || this.state.bidDelta,
        isBidChanged: !!bidDelta,
        offerDelta: offerDelta || this.state.offerDelta,
        isOfferChanged: !!offerDelta,
      });
    },
  })(TableRatesRow);

export default pure(TableRatesRowStateful);
