import React, { Component } from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class PestSelector extends Component {

  @action setPest = (e) => {
    this.props.store.selected.pest = e.target.value
  }

  render () {
    const { pestData } = this.props.store
    return (
      <div>
        <label className="label">Select a Pest:</label>
        <div className="control">
          <span className="select">
            <select
              value={this.pest}
              onChange={this.setPest}
            >
              <option>Select Pest</option>
              {pestData.map((pest,i) =>
                <option key={i}>{pest.informalName}</option>
              )}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default PestSelector
