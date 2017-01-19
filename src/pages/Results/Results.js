import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class Results extends Component {

  render () {
    return (
      <div>
        <h1 className="subtitle is-5">Results will appear here.</h1>

      </div>
    )
  }
}

export default Results
