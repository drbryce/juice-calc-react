import React, { Component } from 'react';
import LoginPage from './components/LoginPage'
import RecipePage from './components/RecipePage'
import FlavorPage from './components/FlavorPage'
import BrandPage from './components/BrandPage'
import OrderPage from './components/OrderPage'
import Navbar from './components/Navbar'
import RecipeIndividual from './components/Recipe/RecipeIndividual'
import DBController from './dbController'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.setActiveLink = this.setActiveLink.bind(this)
    this.setToken = this.setToken.bind(this)
    this.logOut = this.logOut.bind(this)
    this.loginCallBack = this.loginCallBack.bind(this)

    this.state = {
      loggedIn: false,
      token: '',
      activeLink: 'recipe',
      brandList: [],
      flavorList: [],
      recipeList: [],
      orderList: [],
      currentRecipe: ''
    }
  }

  APIurl = 'https://juice.pod.party/'

  loginCallBack(user, pass) {
    DBController.tryLogin(user, pass)
    .then(response => { this.setToken(response.token) })
    .then(() => { DBController.updateBrands(this.state.token)
    .then(response => { this.setState({brandList: response})})})
    .then(() => { DBController.updateFlavors(this.state.token)
    .then(response => { this.setState({flavorList: response})})})
    .then(() => { DBController.updateRecipes(this.state.token)
    .then(response => { this.setState({recipeList: response})})})
    .then(() => { DBController.updateOrders(this.state.token)
    .then(response => { this.setState({orderList: response})})})
    }

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
          loginCallBack={this.loginCallBack}
        />
      </div>
    )

    // We're logged in so return a page.
    const linkNames = {
      'recipe': <RecipePage recipeList={this.state.recipeList} setActiveLink={this.setActiveLink}/>,
      'flavor': <FlavorPage flavorList={this.state.flavorList}/>,
      'brand': <BrandPage brandList={this.state.brandList}/>,
      'order': <OrderPage orderList={this.state.orderList}/>,
      'view-recipe': <RecipeIndividual />
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
