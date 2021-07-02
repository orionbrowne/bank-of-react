// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
  render() {
    return (
        <div>
          <h1>Credits</h1>


          <div><Link to="/">Return to Home</Link></div>
        </div>

    );
  }
}
export default Credits;
