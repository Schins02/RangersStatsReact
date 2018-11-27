import React, { Component } from 'react';
import ballpark from './images/rangersballparkinarlington.jpg'

class HomeSplash extends Component {
  render() {
    return (
      <img src={ballpark} className="home-splash" alt="ballpark"></img>
    );
  }
}

export default HomeSplash;