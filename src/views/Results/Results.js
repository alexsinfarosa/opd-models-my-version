import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// Images
import newaPic from './images/newa_logo.jpg';
import acisPic from './images/PoweredbyACIS_NRCC.jpg';

// Components
import ResultsHeader from './ResultsHeader';
import ResultsTable from './ResultsTable';
import ResultsStage from './ResultsStage';

// style
import './Results.css';

@inject('store')
@observer
export default class Results extends Component {
  render() {
    return (
      <div className="container has-text-centered">

        {/* HEADER */}
        <ResultsHeader />

        <br />

        {/* DATA */}
        <ResultsTable />

        {/* DETAILS STAGE */}
        <ResultsStage />

        <br />

        {/* DISCLAIMER */}
        <div className="columns">
          <div className="column has-text-left">
            <p>
              <small>
                <strong>
                  Disclaimer: These are theoretical predictions and forecasts
                </strong>
                . The theoretical models predicting pest development or disease risk use the weather data collected (or forecasted) from the weather station location. These results should not be substituted for actual observations of plant growth stage, pest presence, and disease occurrence determined through scouting or insect pheromone traps.
              </small>
            </p>
          </div>
        </div>

        {/* IMAGES */}
        <div className="hero-foot">
          <div className="columns">

            <div className="column is-one-half">
              <figure className="image is-64x64 center-image">
                <a href="http://newa.cornell.edu/">
                  <img src={newaPic} alt="newa" />
                </a>
              </figure>

            </div>

            <div className="column is-one-half">
              <figure className="image is-64x64 center-image">
                <a href="http://www.rcc-acis.org/">
                  <img src={acisPic} alt="acis" />
                </a>
              </figure>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
