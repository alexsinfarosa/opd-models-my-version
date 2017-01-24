import React, { Component } from 'react';

export default class Marker extends Component {
  render() {
    return (
       <img
         src={this.props.src}
         alt={this.props.name}
       />
    );
  }
}
