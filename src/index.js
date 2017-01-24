import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './index.css'

import App from './App'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter as Router, Match, Miss } from 'react-router'

import { Provider } from 'mobx-react'
import store from './store'

// const repo = `/${window.location.pathname.split('/')[1]}`; // basename={repo}
// console.log(`it is: ${repo}`);

const Root = () => {
  return (
    <Router>
      <div>
        <Match exactly pattern='/' component={App} />
        <Match exactly pattern='/map' component={App} />
        <Match exactly pattern='/results' component={App} />
        <Match exactly pattern='/moreinfo' component={App} />
        <Miss component={NotFound} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
