import React, { Component } from 'react';
import NavLink from './components/NavLink';
import './App.css'

import SelectionPanel from './components/selection_panel/SelectionPanel'

class App extends Component {
  render () {
    return (
      <section className="hero is-fullheight">

        <div className="hero-body">
          <div className="container">

            <div className="columns">
              <div className="column is-12">
                <h1 className="title">
                  <strong className="logo">NEWA</strong> Apple Insect Model
                </h1>
              </div>
            </div>

            <div className="tile is-ancestor">

              <div className="tile is-parent is-4">
                <div className="tile is-child box">
                  <SelectionPanel />
                </div>
              </div>

              <div className="tile is-parent is-8">
                <div className="tile is-child box">
                  <div className="tabs">
                    <ul>
                      <NavLink to="/map">Map</NavLink>
                      <NavLink to="/results">Results</NavLink>
                      <NavLink to="/moreinfo">More Info</NavLink>
                    </ul>
                  </div>
                  <div className="tile is-child">
                    {this.props.children}
                  </div>
                </div>
              </div>

            </div>



          </div>
        </div>

      </section>
    )
  }
}

export default App
