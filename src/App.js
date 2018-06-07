import React, { Component } from 'react';
import LoginPage from './components/LoginPage'
import RecipePage from './components/RecipePage'
import FlavorPage from './components/FlavorPage'
import BrandPage from './components/BrandPage'
import OrderPage from './components/OrderPage'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.setActiveLink = this.setActiveLink.bind(this)
    this.setToken = this.setToken.bind(this)
    this.logOut = this.logOut.bind(this)
    this.updateBrands = this.updateBrands.bind(this)

    this.state = {
      loggedIn: false,
      token: '',
      activeLink: 'recipe'
    }
  }

  APIurl = 'https://juice.pod.party/'

  setToken(token) {
    this.setState({
      token: token,
      loggedIn: true
    })
  }

  setActiveLink(link) {
    this.setState({
      activeLink: link
    })
  }

  logOut() {
    this.setState({
      loggedIn: false,
      token: ''
    })
  }

  updateBrands() {
    if (this.state.loggedIn) {
      fetch(this.APIurl + 'brand/listjson', {
        headers: {
          'user-agent': 'React Juice Calculator',
          'content-type': 'application/json',
          'token': this.state.token
        },
        method: 'GET',
      })
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            throw new Error('Response code not 200')
          }
        })
        .then(data => {
          //this.props.handleToken(data.token)
          console.log(data)
        })
        .catch(error => {
          // error
        })
    }
  }
  

  render() {
    const navBar = (
      <Navbar 
        activeLink={this.state.activeLink}
        logOut={this.logOut}
        setActiveLink={this.setActiveLink}
      />
    )

    // Not logged in so return login page.
    if (!this.state.loggedIn) return (
      <div className="App">
        <LoginPage 
          handleToken={this.setToken}
          APIurl={this.APIurl}
          successFunc={this.updateBrands}
        />
      </div>
    )

    // We're logged in so return a page.
    const linkNames = {
      'recipe': <RecipePage />,
      'flavor': <FlavorPage />,
      'brand': <BrandPage />,
      'order': <OrderPage />
    }

    const buildLink = (name) => {
      return (
      <div className="App">
        {navBar} 
        {linkNames[name]}
      </div>
     )
    }

    return buildLink(this.state.activeLink)

  }
}

export default App;
