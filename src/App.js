import React, { Component } from 'react';
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.setToken = this.setToken.bind(this)

    this.state = {
      loggedIn: false,
      token: ''
    }
  }

  APIurl = 'https://juice.pod.party/'

  setToken(token) {
    this.setState({
      token: token,
      loggedIn: true
    })
  }

  render() {
    const loggedIn = this.state.loggedIn
    const form = loggedIn ? null : ( <Login handleToken={this.setToken} /> )

    return (
      <div className="App">
        <Navbar />
        {form}
      </div>
    );
  }
}

export default App;
