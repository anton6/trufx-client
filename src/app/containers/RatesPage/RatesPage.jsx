import React from 'react';

import { Helmet } from 'react-helmet';
import SelectRates from './SelectRates';
import TableRates from './TableRates';

const RatesPage = () => (
  <div>
    <Helmet>
      <title>Rates</title>
      <meta name="description" content="" />
    </Helmet>
    <div>
      <SelectRates />
      <TableRates />
    </div>
  </div>
);

export default RatesPage;
