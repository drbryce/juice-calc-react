import React, { Component } from 'react';
import Login from './components/Login'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  render() {
    const loggedIn = this.state.loggedIn
    const form = loggedIn ? null : ( <Login /> )

    return (
      <div className="App">
        {form}
      </div>
    );
  }
}

export default App;
