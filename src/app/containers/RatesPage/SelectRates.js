import { connect } from 'react-redux';

import SelectRates from '../../components/SelectRates';
import {
  getSelectedRates,
  getCurrencyValueLabelPairs,
} from './selectors';
import { currencyPairsOnChange } from './actions';

const mapStateToProps = state => ({
  selectedRates: getSelectedRates(state),
  currencyValueLabelPairs: getCurrencyValueLabelPairs(state),
});

const mapDispatchToProps = ({
  currencyPairsOnChange,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(SelectRates);

