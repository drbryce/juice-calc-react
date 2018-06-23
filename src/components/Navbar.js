import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if(event.target.name === 'logout') {
      this.props.logOut()
    } else {
      this.props.setActiveLink(event.target.name)
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand" href="1">Juice Calculator</p>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" name="recipe" onClick={this.handleClick}>Recipe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="flavor" onClick={this.handleClick}>Flavor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="brand" onClick={this.handleClick}>Brand</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="order" onClick={this.handleClick}>Order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="logout" onClick={this.handleClick}>Logout</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar