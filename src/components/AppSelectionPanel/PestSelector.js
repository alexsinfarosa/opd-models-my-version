import React, { Component } from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class PestSelector extends Component {

  @action setPest = (e) => {
    const pestData = this.props.store.pestData
    const selectedPest = Object
      .keys(pestData)
      .filter(pest => pestData[pest].informalName === e.target.value)[0]
      this.props.store.selected.pest = pestData[selectedPest]
      
  }

  render () {
    const { selected, pestData } = this.props.store
    return (
      <div>
        <label className="label">Select a Pest:</label>
        <div className="control">
          <span className="select">
            <select
              value={selected.pest.informalName}
              onChange={this.setPest}
            >
              <option>Select Pest</option>
              {Object
                .keys(pestData)
                .map(pest =>
                <option key={pest}>{pestData[pest].informalName}</option>)
              }
            </select>
          </span>
        </div>
      </div>
    )
  }
}
