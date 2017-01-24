import React, { Component } from 'react'

import PestSelector from './PestSelector'
import StateSelector from './StateSelector'
import StationSelector from './StationSelector'
import AccumulationEndDate from './AccumulationEndDate'

class SelectionPanel extends Component {
  render () {
    return (
      <div className='tile is-parent is-4'>
        <div className='tile is-child box' >
          <PestSelector />
          <br />
          <StateSelector />
          <br />
          <StationSelector />
          <br />
          <AccumulationEndDate />
          <br />
          <a className='button is-primary is-outlined'>Calculate</a>
        </div>
      </div>
    )
  }
}

export default SelectionPanel
