import React, { Component } from 'react';

class StateSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render () {
    return (
      <div>
        <label className="label">Select a State:</label>
        <div className="control">
          <span className="select">
            <select>
              <option>Select State</option>
              <option>New York</option>
              <option>New Jersey</option>
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default StateSelector
