import lifecycle from 'recompose/lifecycle';

import { compose } from 'redux';
import { connect } from 'react-redux';

import reducer, { STORE_KEY } from './reducer';
import injectReducer from '../../utils/injectReducer';

import RatesPage from './RatesPage';

import {
  connectToTruefx,
  disconnectFromTruefx,
} from './actions';

const SubsribedFxRatesPage =
  lifecycle({
    componentDidMount() {
      this.props.connectToTruefx();
    },
    componentWillUnmount() {
      this.props.disconnectFromTruefx();
    },
  })(RatesPage);

const mapDispatchToProps = ({
  connectToTruefx,
  disconnectFromTruefx,
});

const withReducer = injectReducer({ key: STORE_KEY, reducer });
const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(SubsribedFxRatesPage);
