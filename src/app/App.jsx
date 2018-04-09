import React from 'react';
import { Helmet } from 'react-helmet';

import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import Footer from './components/Footer';

import Router from './Router';

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle="React.js fx rates application"
      >
        <meta name="description" content="A React.js fx rates application" />
      </Helmet>
      <Header />
      <Router />
      <Footer />
    </AppWrapper>
  );
}
