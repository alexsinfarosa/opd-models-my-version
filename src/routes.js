import React from 'react'
import { BrowserRouter, Match } from 'react-router'

import App from './App'
import TheMap from './pages/TheMap/TheMap'
import Results from './pages/Results/Results'
import MoreInfo from './pages/MoreInfo/MoreInfo'

// const repo = `/${window.location.pathname.split('/')[1]}`; // basename={repo}

const Routes = (props) => (
  <BrowserRouter {...props}>
    <div>
      <Match exaclty pattern='/' component={App} />
      <Match exaclty pattern='/map' component={TheMap} />
      <Match pattern='/results' component={Results} />
      <Match pattern='/moreinfo' component={MoreInfo} />
    </div>
  </BrowserRouter>
)

export default Routes
