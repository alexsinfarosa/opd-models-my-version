import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';

@inject('store') @observer
class StateSelector extends Component {

  @action setState = (e) => {
    const { states } = this.props.store
    const selectedState = states.filter(state => state.name === e.target.value)[0]
    this.props.store.selected.state = selectedState
    this.props.store.addIconsToStations()
  }

  render () {
    const { states, selected } = this.props.store;
    return (
      <div>
        <label className="label">Select a State:</label>
        <div className="control">
          <span className="select">
            <select
              value={selected.state.name}
              onChange={this.setState}
            >
              <option>Select State</option>
              {states.map((state, i) =>
                <option key={i}>{state.name}</option>
              )}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default StateSelector