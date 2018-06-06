import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="1">Navbar</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Recipe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Flavor</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar