import { connect } from 'react-redux';

import TableRates from '../../components/TableRates';
import { getFilteredRates } from './selectors';

const mapStateToProps = state => ({
  rates: getFilteredRates(state),
});

const withConnect = connect(mapStateToProps);

export default withConnect(TableRates);
