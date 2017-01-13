import React, { Component } from 'react';
import { Match, Link } from 'react-router';
import { observer } from 'mobx-react'


import TheMap from './pages/TheMap/TheMap';
import Results from './pages/Results/Results';
import MoreInfo from './pages/MoreInfo/MoreInfo';
import SelectionPanel from './components/selection_panel/SelectionPanel'
import './App.css'

@observer
class App extends Component {
  render () {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">

            <div className="columns">
              <div className="column is-12">
                <h1 className="title">
                  <strong className="logo">NEWA</strong> Commercial Tree and Shrub Insect Models
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
                      <li><Link to="/map">Map</Link></li>
                      <li><Link to="/results">Results</Link></li>
                      <li><Link to="/moreinfo">More Info</Link></li>
                    </ul>
                  </div>
                  <div className="tile is-child">
                    <Match pattern="/map" component={TheMap} />
                    <Match pattern="/results" component={Results} />
                    <Match pattern="/moreinfo" component={MoreInfo} />
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
