import React, { Component } from 'react'
import { connect } from 'react-redux'

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


  order() {
    var badge
    if(this.props.orderList)
      badge = <span className="badge badge-warning">{this.props.orderList.length}</span>
    else
      badge = ''
    return <a className="nav-link" name="order" onClick={this.handleClick}>Order {badge}</a>
  }

  brand() {
    var badge
    if(this.props.brandList)
      badge = <span className="badge badge-primary">{this.props.brandList.length}</span>
    else
      badge = ''
    return <a className="nav-link" name="brand" onClick={this.handleClick}>Brand {badge}</a>
  }

  flavor() {
    var badge
    if(this.props.flavorList)
      badge = <span className="badge badge-primary">{this.props.flavorList.length}</span>
    else
      badge = ''
    return <a className="nav-link" name="flavor" onClick={this.handleClick}>Flavor {badge}</a>
  }

  recipe() {
    var badge
    if(this.props.recipeList)
      badge = <span className="badge badge-primary">{this.props.recipeList.length}</span>
    else
      badge = ''
    return <a className="nav-link" name="recipe" onClick={this.handleClick}>Recipe {badge}</a>
  }


  render() {
    let styleObj = { marginBottom: 15 }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={styleObj}>
        <p className="navbar-brand" href="1">Juice Calculator</p>
        <ul className="navbar-nav">
          <li className="nav-item">
            {this.recipe()}
          </li>
          <li className="nav-item">
            {this.flavor()}
          </li>
          <li className="nav-item">
            {this.brand()}
          </li>
          <li className="nav-item">
            {this.order()}
          </li>
          <li className="nav-item">
            <a className="nav-link" name="logout" onClick={this.handleClick}>Logout</a>
          </li>
        </ul>
      </nav>
    )
  }
}
const mapStateToProps = state => ({
  // local state var : redux store var
  brandList: state.api.brandList,
  flavorList: state.api.flavorList,
  recipeList: state.api.recipeList,
  orderList: state.api.orderList  
})
export default connect(mapStateToProps)(Navbar)