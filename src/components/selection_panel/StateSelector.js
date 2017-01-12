import React, { Component } from 'react';

class StateSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      availableStates: ['Connecticut','Delaware','DC','Illinois','Iowa','Maine','Maryland','Massachusetts','Michigan','Minnesota','Missouri','Nebraska','New Hampshire','New Jersey','New York','North Carolina','Pennsylvania','Rhode Island','South Carolina','South Dakota','Vermont','Virginia','West Virginia','Wisconsin','Alabama','All States'],
      selectedState: ''
    }
  }

  handleChange(e) {
    this.setState({selectedState: e.target.value})
  }

  render () {
    console.log(this.state.selectedState);
    return (
      <div>
        <label className="label">Select a State:</label>
        <div className="control">
          <span className="select">
            <select
              value={this.state.selectedState}
              onChange={this.handleChange}
            >
              <option>Select State</option>
              {this.state.availableStates.map((state, i) => <option key={i}>{state}</option>)}
            </select>
          </span>
        </div>
      </div>
    )
  }
}

export default StateSelector
