import React, { Component } from 'react';
import { action, computed, observable } from 'mobx';
import newaPic from './newa_logo.jpg'
import pmepPic from './pmep_logo.jpg'
import acisPic from './PoweredbyACIS_NRCC.jpg'
import { inject, observer } from 'mobx-react';
import './Results.css'

@inject('store') @observer
class Results extends Component {
  @observable selectedStage = {}

  @action userSetStage = (e) => {
    const { pest } = this.props.store.selected

    const selectedStage = pest.preBiofix.filter(stage => stage.stage === e.target.value)[0]
    this.selectedStage = selectedStage
    console.log(this.selectedStage)
  }

  @computed get getStageList() {
    const { pest } = this.props.store.selected
    if (pest.hasOwnProperty('formalName')) {
      return pest.preBiofix.map((stage,i) =>
        <option key={i}>{stage.stage}</option>)
    }
  }


  render () {
    const { selected, dd, accdd } = this.props.store
    const { pest } = this.props.store.selected
    // console.log(mobx.toJS(ACISData.data))
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
                  Accumulated Degree Days ({pest.baseTemp}°F) <strong>{selected.startDate}</strong> through <strong>{selected.endDate.toLocaleDateString()}</strong>: {accdd[accdd.length - 1]} (0 days missing)
                </h2>
              </div>
            </div>

            <br/>

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
                      <th className="before">Jan 1</th>
                      <th className="before">Jan 2</th>
                      <th className="before">Jan 3</th>
                      <th className="after">Jan 4</th>
                      <th className="after">Jan 5</th>
                      <th className="after">Jan 6</th>
                      <th className="after">Jan 7</th>
                      <th className="after">Jan 8</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Daily Degree Days (Base 50BE)</th>
                      <td>{dd[dd.length - 3]}</td>
                      <td>{dd[dd.length - 2]}</td>
                      <td>{dd[dd.length - 1]}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>Accumulation since January 1st</th>
                      <td>{accdd[accdd.length - 3]}</td>
                      <td>{accdd[accdd.length - 2]}</td>
                      <td>{accdd[accdd.length - 1]}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DETAILS */}

            <div className="columns">
              <div className="column has-text-centered">
                {/* <div className="control"> */}
                  <span className="select">
                    <select
                      onChange={this.userSetStage}
                      value={this.selectedStage.stage}
                    >
                      <option>Select a stage</option>
                      {this.getStageList}
                    </select>
                  </span>
                {/* </div> */}
                <p><small>Change the pest stage above and the model will recalculate recommendations.</small></p>
              </div>
            </div>

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
                      <td>{this.selectedStage.management || ''}</td>
                      <td>{this.selectedStage.status || ''}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>



            {/* DISCLAIMER */}

            <div className="columns">
              <div className="column has-text-centered">
                <p><small><strong>Disclaimer: These are theoretical predictions and forecasts</strong>. The theoretical models predicting pest development or disease risk use the weather data collected (or forecasted) from the weather station location. These results should not be substituted for actual observations of plant growth stage, pest presence, and disease occurrence determined through scouting or insect pheromone traps.</small></p>
              </div>
            </div>

          </div>
        </div>

        {/* IMAGES */}
        <div className="hero-foot">
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

      </section>
    )
  }
}

export default Results
