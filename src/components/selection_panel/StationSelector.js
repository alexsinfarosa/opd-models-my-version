import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class StationSelector extends Component {

  // filter(e) {
  //   station.state === this.props.store.selected.state.name
  // }

  render () {
    const { filteredStations } = this.props.store;

    const filteredStationsList = filteredStations.map((station, i) => (
      <option key={i}>{station.name}</option>))

    return (
      <div>
        <label className="label">Select a Station: <strong className="primary-color">{filteredStations.length}</strong></label>
        <div className="control">
          <span className="select">
            <select
              onMouseOver={false} // To implement
              >
              <option>Select Station</option>
              {filteredStationsList}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default StationSelector
