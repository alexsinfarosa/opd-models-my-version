import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, hashHistory } from 'react-router';

import Routes from './routes';

import 'bulma/css/bulma.css';
import './index.css';

ReactDOM.render(
  <Routes history={hashHistory} />,
  document.getElementById('root')
);
