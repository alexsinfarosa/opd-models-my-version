import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';

@inject('store') @observer
class StateSelector extends Component {

  @action selectedState = (e) => {
    this.props.store.selected.state.name = e.target.value;
    const state = this.props.store.stateCenters.filter(state => state.name === this.props.store.selected.state.name)
    this.props.store.filterStations(state[0].postalCode);
  }

  render () {
    const { selected, states} = this.props.store;
    return (
      <div>
        <label className="label">Select a State:</label>
        <div className="control">
          <span className="select">
            <select
              value={selected.state.name}
              onChange={this.selectedState}
            >
              <option>Select State</option>
              {states.map((state, i) => <option key={i}>{state}</option>)}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default StateSelector
