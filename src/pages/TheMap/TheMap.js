import React, { Component } from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMapReact from 'google-map-react';
// import MyGreatPlace from './my_great_place.jsx';

export default class TheMap extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      center: [42.9543, -75.5262],
      zoom: 5,
    }
  }

  onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,
    });
  }

  render() {
    return (
      <div style={{width: '100%', height: 560}}>
       <GoogleMapReact
         bootstrapURLKeys={{
          key: 'AIzaSyAftetOMxP8ksyB5AW_CLWvDZG7nKmcIrI',
          language: 'en'
        }}
        onChange={this.onChange}
        center={this.state.center}
        zoom={this.state.zoom}>
        {/* <div className="place" lat={60.955413} lng={30.337844}>MyPlace</div> */}
      </GoogleMapReact>
      </div>
    );
  }
}
