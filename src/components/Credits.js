// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';


class Credits extends Component {
  constructor () {
    super()
    this.state = {
      newCredits: {
        amount: '',
        description: '',
        date: new Date()
      }
    }
  }
  makeList = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
      return <li key={credit.id}>{credit.amount} {credit.description} {credit.date}</li>
    })
  }
  handleInputChange = (e) => {

    this.setState({credits: e.target.value});
  }

  render() {
    return (
        <div>
          <h1>Credits</h1>
          <ul>{this.makeList()}</ul>
          <div>

            <input type="value" id= 'addValue' value ={this.state.newCredits.amount} onChange={this.handleInputChange} placeholder="Enter amount of credit"/>
            <input type="text" id = 'addDescription' value = {this.state.newCredits.description} Change={this.handleInputChange} placeholder="Enter description of credit"/>
            <button onClick={this.addCredit}>Add</button>


            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>

          <div><Link to="/">Return to Home</Link></div>
        </div>

    );
  }
}
export default Credits;
