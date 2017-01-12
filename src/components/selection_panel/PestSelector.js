import React, { Component } from 'react';
import Data from '../../../public/data.json';

class PestSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      data: Data,
      selectedPest: ''
    }
  }

  handleChange(e) {
    this.setState({selectedPest: e.target.value})
  }

  render () {
    console.log(this.state.selectedPest);
    return (
      <div>
        <label className="label">Select a Pest:</label>
        <div className="control">
          <span className="select">
            <select
              value={this.state.selectedPest}
              onChange={this.handleChange}
            >
              <option>Select Pest</option>
              {this.state.data.map((pest, i) =>
                <option key={i}>{pest.informalName}</option>)}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default PestSelector
