import React, { Component } from 'react'

class Login extends Component {
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
      fetch(this.props.APIurl + 'login', {
        body: JSON.stringify( {
          username: this.state.username,
          password: this.state.password
        }),
        headers: {
          'user-agent': 'React Juice Calculator',
          'content-type': 'application/json'
        },
        method: 'POST',
      })
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            throw new Error('Response code not 200')
          }
        })
        .then(data => {
          this.props.handleToken(data.token)
        })
        .catch(error => {
          // bad password
        })
    }
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

export default Login