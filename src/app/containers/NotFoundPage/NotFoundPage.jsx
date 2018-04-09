import React from 'react';
import { Helmet } from 'react-helmet';
import Center from '../../components/Center';

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>Page Not Found</title>
      <meta name="description" content="Page Not Found" />
    </Helmet>
    <div>
      <Center>Page Not Found</Center>
    </div>
  </div>
);

export default NotFoundPage;
