import React from 'react';
import { Helmet } from 'react-helmet';
import Center from '../../components/Center';
import H2 from '../../components/H2';
import P from '../../components/P';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="" />
    </Helmet>
    <div>
      <Center>
        <H2>About</H2>
        <P>Exchange Rates obtained from <a href="https://www.truefx.com/" target="_blank" rel="noopener noreferrer">TrueFX Market Data Web API</a>.</P>
      </Center>
    </div>
  </div>
);

export default HomePage;
