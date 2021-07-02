// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
  makeList = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
      return <li key={credit.id}>{credit.amount} {credit.description} {credit.date}</li>
    })
  }
  handleInputChange = (event) => {
    this.setState({credits: event.target.value});
  }

  render() {
    return (
        <div>
          <h1>Credits</h1>
          <ul>{this.makeList()}</ul>
          <div>

            <input type="value" onChange={this.handleInputChange} placeholder="Enter amount of credit"/>
            <input type="text" onChange={this.handleInputChange} placeholder="Enter description of credit"/>
            <button onClick={this.addCredit}>Add</button>

          </div>

          <div><Link to="/">Return to Home</Link></div>
        </div>

    );
  }
}
export default Credits;
