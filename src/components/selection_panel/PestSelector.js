import React, { Component } from 'react';


class PestSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render () {
    return (
      <div>
        <label className="label">Select a Pest:</label>
        <div className="control">
          <span className="select">
            <select>
              <option>Select Pest</option>
              <option>sdfsd</option>
              <option>Plum Curculio</option>
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default PestSelector
