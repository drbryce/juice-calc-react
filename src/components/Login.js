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
      fetch('https://juice.pod.party/login', {
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
          return response.json()
        })
        .then(data => {
          this.props.handleToken(data.token)
          //console.log(data)
        })
        .catch(error => console.error(error))
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