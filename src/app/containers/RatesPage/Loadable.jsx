import React from 'react';
import Loadable from 'react-loadable';
import PageLodingSpinner from '../../components/PageLoadingSpinner';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <PageLodingSpinner />,
});
