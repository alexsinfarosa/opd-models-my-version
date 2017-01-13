import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import NotFound from './pages/NotFound/NotFound';
import AppState from './store/AppState'

import 'bulma/css/bulma.css';
import './index.css';

const appState = new AppState();


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/map" component={App} />
        <Match exactly pattern="/results" component={App} />
        <Match exactly pattern="/moreinfo" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root store={appState}/>,
  document.getElementById('root')
);
