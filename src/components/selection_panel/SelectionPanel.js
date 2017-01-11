import React, { Component } from 'react';

import PestSelector from './PestSelector';
import StateSelector from './StateSelector';
import StationSelector from './StationSelector';
import AccumulationEndDate from './AccumulationEndDate';

class SelectionPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render () {
    return (
      <div>
        <PestSelector />
        <br/>
        <StateSelector />
        <br/>
        <StationSelector />
        <br/>
        <AccumulationEndDate />
        <br/>
        <a className="button is-primary is-outlined">Calculate</a>
      </div>
    )
  }
}

export default SelectionPanel
