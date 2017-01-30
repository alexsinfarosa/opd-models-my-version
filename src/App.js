import React, { Component } from 'react'
import './App.css'
import { action, when } from 'mobx';
import { inject, observer } from 'mobx-react';
import axios from 'axios'

import AppHeader from './components/AppHeader/AppHeader'
import AppSelectionPanel from './components/AppSelectionPanel'
import AppDisplayPanel from './components/AppDisplayPanel/AppDisplayPanel'

@inject('store') @observer
export default class App extends Component {
  constructor(props) {
    super(props)

    when(
           // once...
           () => this.props.store.stations.length === 0,
           // ... then
           () => this.fetchStations()
       )
  }

  @action fetchStations = () => {
    axios.get('http://newa.nrcc.cornell.edu/newaUtil/stateStationList/all')
    .then(res => {
      const stations = res.data.stations
      this.props.store.stations = stations
      // console.log(stations[0])
    })
    .catch(err => {
      console.log(err)
      this.props.store.stations = []
    })}

  render () {
    return (
      <section className='hero is-fullheight'>
        <div className='hero-body'>
          <div className='container'>
            <AppHeader />
            <div className='tile is-ancestor'>
              <AppSelectionPanel />
              <AppDisplayPanel />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
