import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import TheMap from './pages/TheMap/TheMap';
import Results from './pages/Results/Results';
import MoreInfo from './pages/MoreInfo/MoreInfo';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/map" component={TheMap}/>
      <Route path="/results" component={Results}/>
      <Route path="/moreinfo" component={MoreInfo}/>
    </Route>
  </Router>
);

export default Routes;
