import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Routers from './Routers.js';

import '../node_modules/jquery/dist/jquery.min.js';
import './Vendor.js';

class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <Routers />
        </HashRouter>
    );
  }
}

export default App;
