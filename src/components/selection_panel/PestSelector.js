import React, { Component } from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class PestSelector extends Component {

  @action selectPest(e) {
    this.props.store.selected.pest = e.target.value
  }

  render () {
    const { data, selected } = this.props.store;
    return (
      <div>
        <label className="label">Select a Pest:</label>
        <div className="control">
          <span className="select">
            <select
              value={selected.pest}
              onChange={this.selectPest.bind(this)}
            >
              <option>Select Pest</option>
              {data.map((pest, i) =>
                <option key={i}>{pest.informalName}</option>)}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default PestSelector
