import React, { Component } from 'react';

class TheMap extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render () {
    return (
      <div>
        <h1 className="subtitle is-5">Select a state from the menu to the left.</h1>
      </div>
    )
  }
}

export default TheMap
