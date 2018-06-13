import React, { Component } from 'react';
import LoginPage from './components/LoginPage'
import RecipePage from './components/RecipePage'
import FlavorPage from './components/FlavorPage'
import BrandPage from './components/BrandPage'
import OrderPage from './components/OrderPage'
import Navbar from './components/Navbar'
import RecipeIndividual from './components/Recipe/RecipeIndividual'
import DBController from './controllers/dbController'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.setActiveLink = this.setActiveLink.bind(this)
    this.setBrands = this.setBrands.bind(this)
    this.deleteBrand = this.deleteBrand.bind(this)
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
      pageModifier: ''
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

  setBrands() {
    DBController.updateBrands(this.state.token).then(response => {
      this.setState({brandList: response})
    })
  }

  deleteBrand(event) {
    DBController.deleteBrand(this.state.token, event.target.id)
    this.setBrands()
  }

  setToken(token) {
    this.setState({
      token: token,
      loggedIn: true
    })
  }

  setActiveLink(link, modifier) {
    if (!modifier) modifier = ''
    this.setState({
      activeLink: link,
      pageModifier: modifier
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
    if (!this.props.loggedIn) return (
        <div className="App">
          <LoginPage 
            handleToken={this.setToken}
            APIurl={this.APIurl}
            successFunc={this.updateBrands}
            // loginCallBack={this.loginCallBack}
          />
        </div>
    )

    const currentRecipe = this.props.recipeList[this.props.recipeList.findIndex((recipe) => { return recipe._id === this.state.pageModifier })]
    // We're logged in so return a page.
    const linkNames = {
      'recipe': <RecipePage setActiveLink={this.setActiveLink}/>,
      'flavor': <FlavorPage />,
      'brand': <BrandPage 
        brandCallback={this.setBrands}
        deleteBrand={this.deleteBrand}  
      />,
      'order': <OrderPage />,
      'view-recipe': <RecipeIndividual 
                        recipe={currentRecipe}
                        />
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

const mapStateToProps = state => ({
  loggedIn: state.api.loggedIn,
  recipeList: state.api.recipeList
})

export default connect(mapStateToProps)(App)
