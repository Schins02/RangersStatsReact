import React, { Component } from 'react';
import './App.css';
import 'polythene-css';
import AppToolbar from './AppToolbar';
import HomeSplash from './HomeSplash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppToolbar></AppToolbar>
        <HomeSplash></HomeSplash>
      </div>
    );
  }
}

export default App;
