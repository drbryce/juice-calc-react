import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setToken, fetchBrands, fetchFlavors, fetchOrders, fetchRecipes } from '../actions/apiActions'
import DBController from '../controllers/dbController'


class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    switch(event.target.name) {
      case 'username':
        this.setState({username: event.target.value})
        break
      case 'password':
      this.setState({password: event.target.value})
        break
      default:
        break
    }
  }

  handleSubmit(event) {
    if (this.state.username && this.state.password) {
        DBController.tryLogin(this.state.username, this.state.password)
        .then(response => { 
          this.props.setToken(response.token)
          this.props.fetchBrands(response.token)
          this.props.fetchFlavors(response.token)
          this.props.fetchRecipes(response.token)
          this.props.fetchOrders(response.token)
        })
    }
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post">
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
          </label><br />
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange} />
          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})

export default connect(mapStateToProps, {setToken, fetchBrands, fetchFlavors, fetchRecipes, fetchOrders}) (LoginPage)