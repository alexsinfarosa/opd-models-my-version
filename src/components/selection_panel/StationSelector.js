import React, { Component } from 'react';

class StationSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render () {
    return (
      <div>
        <label className="label">Select a Station:</label>
        <div className="control">
          <span className="select">
            <select>
              <option>Select Station</option>
              <option>Ithaca Cornell</option>
              <option>Jamestown</option>
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default StationSelector
