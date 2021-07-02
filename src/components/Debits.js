// src/components/Debits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
  makeList = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
      return <li key={debit.id}>{debit.amount} {debit.description} {debit.date}</li>
    })
  }
  render() {
    return (
        <div>
          <h1>Debits</h1>
          <ul>{this.makeList()}</ul>

          <input type="value" onChange={this.handleInputChange} placeholder="Enter amount of credit"/>
          <input type="text" onChange={this.handleInputChange} placeholder="Enter description of credit"/>
          <button onClick={this.addCredit}>Add</button>

          <div><Link to="/">Return to Home</Link></div>
        </div>

    );
  }
}
export default Debits;
