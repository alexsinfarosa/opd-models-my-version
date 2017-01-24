import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { action, computed } from 'mobx';

@inject('store') @observer
export default class StationSelector extends Component {

  @computed get stationList () {
    const { stations, selected } = this.props.store
    return stations.filter(station => station.state === selected.state.postalCode)
  }

  @action setStation = (e) => {
    this.props.store.selected.station = e.target.value
  }

  render () {
    const { selected } = this.props.store
    return (
      <div>
        <label className="label">Select a Station: <strong className="primary-color">{this.stationList.length}</strong></label>
        <div className="control">
          <span className="select">
            <select
              onChange={this.setStation}
              value={selected.station}
              onMouseOver={false} // To implement
              >
              <option>Select Station</option>
              {this.stationList.map((station, i) => (
                <option key={i}>{station.name}</option>))
              }
            </select>
          </span>
        </div>
      </div>
    )
  }
}
