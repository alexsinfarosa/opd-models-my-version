import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import Marker from './Marker';
import axios from 'axios';

@inject('store') @observer
export default class TheMap extends Component {

  @action onChange = ({center, zoom}) => {
    // this.props.store.selected.state = {center, zoom}
    console.log(`Lat: ${center.lat}, Lon: ${center.lng}, Zoom: ${zoom}`)
  }

  @action updateStation = (stations) => {
    this.props.store.stations = stations
    // this.props.store.stations.map(s => console.log(s.name))
  }

  componentDidMount() {
    axios.get('http://newa.nrcc.cornell.edu/newaUtil/stateStationList/all')
    .then(res => {
      const stations = res.data.stations
      console.log(stations[0])
      this.updateStation(stations)
      return
    })
    .catch(err => {
      console.log(err)
      // console.log("Request Error: "+(err.response.data || err.response.statusText))
      this.updateStation([])
    })
  }

  render() {
    const { selected, filteredStations } = this.props.store;

    // const url = 'http://newa.nrcc.cornell.edu/gifs/'
    // const MAP_ICONS = {
    //   newa: `${url}newa_small.png`,
    //   newaGray: `${url}newa_smallGray.png`,
    //   airport: `${url}airport.png`,
    //   airportGray: `${url}airportGray.png`,
    //   culog: `${url}culog.png`,
    //   culogGray: `${url}culogGray.png`,
    // }

    const MarkerList = filteredStations.map( (station,i) => (
      <Marker
        key={i}
        network={station.network}
        lat={station.lat}
        lng={station.lon}
        postalCode={station.state}
        src={station.icon}
        alt={station.name}
      />
    ))

    return (
      <div style={{width: '100%', height: 560}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAftetOMxP8ksyB5AW_CLWvDZG7nKmcIrI',
            language: 'en'
          }}
          onChange={this.onChange}
          center={selected.state.center}
          zoom={selected.state.zoom}>

          {MarkerList}
        </GoogleMapReact>
      </div>
    );
  }
}
