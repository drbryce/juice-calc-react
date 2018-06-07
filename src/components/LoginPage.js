import React, { Component } from 'react'

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
        this.props.loginCallBack(this.state.username, this.state.password)
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

export default LoginPage