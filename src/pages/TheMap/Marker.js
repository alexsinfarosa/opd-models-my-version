import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

// import { MarkerStyles } from './MarkerStyles';

export default class MyGreatPlace extends Component {
  static propTypes = {
    postalCode: PropTypes.string
  };

  // shouldComponentUpdate = shouldPureComponentUpdate;


  render() {

    return (
      //  <div style={MarkerStyles}>
      //     {this.props.text}
      //  </div>
       <img
         src={this.props.src}
         alt={this.props.name}
       />
    );
  }
}
