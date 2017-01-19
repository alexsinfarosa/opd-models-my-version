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
  }

  @action updateStation = (stations) => {
    this.props.store.stations = stations
    // this.props.store.stations.map(s => console.log(s.name))
  }

  componentDidMount() {
    axios.get('http://newa.nrcc.cornell.edu/newaUtil/stateStationList/all')
    .then(res => {
      const stations = res.data.stations
      console.log(stations[0]);
      this.updateStation(stations)
      return
    })
    .catch(err => {
      // console.log("Request Error: "+(err.response.data || err.response.statusText))
      this.updateStation(['x'])
    })
  }

  render() {
    const { selected, stateCenters } = this.props.store;
    const MarkerList = stateCenters.map((state, i) => (
      <Marker
        key={i}
        lat={state.lat}
        lng={state.lon}
        text={state.postalCode} />
    ))

    return (
      <div style={{width: '100%', height: 560}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAftetOMxP8ksyB5AW_CLWvDZG7nKmcIrI',
            language: 'en'
          }}
          onChange={this.onChange.bind(this)}
          center={selected.state.center}
          zoom={selected.state.zoom}>
          {MarkerList}
        </GoogleMapReact>
      </div>
    );
  }
}
