import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import 'bulma/css/bulma.css'
import App from './App'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Match, Miss } from 'react-router'

import { Provider } from 'mobx-react'
import store from './store'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={App} />
        <Match exactly pattern='/map' component={App} />
        <Match exactly pattern='/results' component={App} />
        <Match exactly pattern='/moreinfo' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
