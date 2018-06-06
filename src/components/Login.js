import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label><br />
        <label>
          Password:
          <input type="password" name="password" />
        </label><br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Login