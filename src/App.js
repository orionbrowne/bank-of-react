// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from "axios";

// API: https://moj-api.herokuapp.com/debits
//      https://moj-api.herokuapp.com/credits

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: [],
      loading: true
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async componentDidMount() {
    //const url = "https://moj-api.herokuapp.com/debits";
    //const response = await fetch(url);
    //const data = await response.json();
    //this.setState({ debits: data.description, loading: false});
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");
    //get data from API response
    debits = debits.data;
    credits = credits.data;

    this.setState({debits, credits});
  }

  addDebit = (e) => {
  }

  addCredit = (e) => {
    this.setState({credits: this.state.credits([e.target.value])
    })
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={this.state.credits} />);
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={this.state.debits} />);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>

          </div>
        </Router>
    );
  }

}

export default App;
