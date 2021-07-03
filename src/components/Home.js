// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import styles from './styles.css';


class Home extends Component {
  render() {
    return (
        <div>
          <h1>Bank of React</h1>

          <Link to="/Login">Log In  </Link>
          <Link to="/userProfile">User Profile  </Link>
          <Link to="/Debits">Debits  </Link>
          <Link to="/Credits">Credits</Link>



          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;
