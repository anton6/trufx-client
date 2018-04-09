import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/Loadable';
import RatesPage from './containers/RatesPage/Loadable';
import NotFoundPage from './containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/rates" component={RatesPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}
