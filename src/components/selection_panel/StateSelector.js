import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class StateSelector extends Component {

  selectState(e) {
    this.props.store.selected.state = e.target.value
  }

  render () {
    const { selected, states} = this.props.store;
    return (
      <div>
        <label className="label">Select a State:</label>
        <div className="control">
          <span className="select">
            <select
              value={selected.state}
              onChange={this.selectState.bind(this)}
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
