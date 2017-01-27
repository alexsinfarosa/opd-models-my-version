import React, { Component } from 'react';
import mobx from 'mobx';
import newaPic from './newa_logo.jpg'
import pmepPic from './pmep_logo.jpg'
import acisPic from './PoweredbyACIS_NRCC.jpg'
import { inject, observer } from 'mobx-react';
import './Results.css'
// import pestData from '../../../public/pestData.json'

@inject('store') @observer
class Results extends Component {

  render () {
    const { selected } = this.props.store
    const { pest } = this.props.store.selected
    // console.log(mobx.toJS(selected))
    console.log(mobx.toJS(selected))
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">

        {/* HEADER */}

        <div className="columns">
          <div className="column has-text-centered">
            <h1 className="title is-4">
              {pest.informalName} Results for {selected.station.name}
            </h1>
            <h2 className="subtitle is-6">
              Accumulated Degree Days (50°F) <strong>1/1/2016</strong> through <strong>{selected.endDate.toLocaleDateString()}</strong>: 23 (0 days missing)
            </h2>
          </div>
        </div>

        {/* DATA */}

        <div className="columns">
          <div className="column has-text-centered">
            <table className="table is-bordered is-striped is-narrow">
              <thead className="t-header">
                <tr>
                  <th></th>
                  <th className="before">Past</th>
                  <th className="before">Past</th>
                  <th className="before">Current</th>
                  <th className="after"></th>
                  <th className="after"></th>
                  <th className="after">Ensuing 5 Days</th>
                  <th className="after"></th>
                  <th className="after"></th>
                </tr>
                <tr>
                  <th></th>
                  <th className="before">Jan 12</th>
                  <th className="before">Jan 13</th>
                  <th className="before">Jan 14</th>
                  <th className="after">Jan 15</th>
                  <th className="after">Jan 16</th>
                  <th className="after">Jan 17</th>
                  <th className="after">Jan 18</th>
                  <th className="after">Jan 19</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Daily Degree Days (Base 50BE)</th>
                  <td>22</td>
                  <td>18</td>
                  <td>20</td>
                  <td>22</td>
                  <td>26</td>
                  <td>23</td>
                  <td>22</td>
                  <td>19</td>
                </tr>
                <tr>
                  <th>Accumulation since Januart 1st</th>
                  <td>2112</td>
                  <td>1118</td>
                  <td>1120</td>
                  <td>1222</td>
                  <td>1326</td>
                  <td>1423</td>
                  <td>1522</td>
                  <td>1619</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DETAILS */}

        <div className="columns">
          <div className="column has-text-centered">
            <table className="table is-bordered is-striped">
              <thead>
                <tr>
                  <th>Pest Status</th>
                  <th>Pest Management</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pest.preBiofix[0].status}</td>
                  <td>{pest.preBiofix[0].management}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <br/><br/>

        {/* DISCLAIMER */}

        <div className="columns">
          <div className="column has-text-centered">
            <p><small><strong>Disclaimer: These are theoretical predictions and forecasts</strong>. The theoretical models predicting pest development or disease risk use the weather data collected (or forecasted) from the weather station location. These results should not be substituted for actual observations of plant growth stage, pest presence, and disease occurrence determined through scouting or insect pheromone traps.</small></p>
          </div>
        </div>

        <br/><br/>

        {/* IMAGES */}

        <div className="columns">

          <div className="column is-one-third">
            <figure className="image is-64x64 center-image">
              <a href="http://newa.cornell.edu/">
                <img src={newaPic} alt="newa"/>
              </a>
            </figure>

          </div>
          <div className="column is-one-third">
            <figure className="image is-64x64 center-image">
              <a href="http://treefruitipm.info/">
                <img src={pmepPic} alt="pmep"/>
              </a>
            </figure>
          </div>
          <div className="column is-one-third">
            <figure className="image is-64x64 center-image">
              <a href="http://www.rcc-acis.org/">
                <img src={acisPic} alt="acis"/>
              </a>
            </figure>
          </div>

        </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Results
