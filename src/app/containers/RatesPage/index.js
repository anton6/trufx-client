import lifecycle from 'recompose/lifecycle';

import { compose } from 'redux';
import { connect } from 'react-redux';

import reducer, { STORE_KEY } from './reducer';
import injectReducer from '../../utils/injectReducer';

import RatesPage from './RatesPage';

import {
  subscribeToTruefx,
  unsubscribeFromTruefx,
} from './actions';

const SubsribedFxRatesPage =
  lifecycle({
    componentDidMount() {
      this.props.subscribeToTruefx();
    },
    componentWillUnmount() {
      this.props.unsubscribeFromTruefx();
    },
  })(RatesPage);

const mapDispatchToProps = ({
  subscribeToTruefx,
  unsubscribeFromTruefx,
});

const withReducer = injectReducer({ key: STORE_KEY, reducer });
const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(SubsribedFxRatesPage);
