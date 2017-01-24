import React, { Component } from 'react'
import './App.css'
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import axios from 'axios'

import AppHeader from './components/AppHeader/AppHeader'
import AppSelectionPanel from './components/AppSelectionPanel'
import AppDisplayPanel from './components/AppDisplayPanel/AppDisplayPanel'

@inject('store') @observer
export default class App extends Component {
  constructor(props) {
    super(props)

    this.fetchStations()
  }

  @action fetchStations = () => {
    axios.get('http://newa.nrcc.cornell.edu/newaUtil/stateStationList/all')
    .then(res => {
      const stations = res.data.stations
      console.log(stations[0])
      this.props.store.stations = stations
      return
    })
    .catch(err => {
      console.log(err)
      // console.log("Request Error: "+(err.response.data || err.response.statusText))
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
