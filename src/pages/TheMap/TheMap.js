import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import Marker from './Marker';

@inject('store') @observer
export default class TheMap extends Component {

  @action onChange = ({center, zoom}) => {
    // console.log(`Lat: ${center.lat}, Lon: ${center.lng}, Zoom: ${zoom}`)
  }

  createMapOptions(maps) {
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_BUTTOM,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    }
  }

  render() {
    const { selected, filteredStations } = this.props.store;
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
          center={[selected.state.lat, selected.state.lon]}
          zoom={selected.state.zoom}
          options={this.createMapOptions}>

          {MarkerList}
        </GoogleMapReact>
      </div>
    );
  }
}
