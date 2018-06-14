import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipeFlavorItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(event) {
    this.props.removeFlavor(this.props.flavor)
  }

  render() {
    const flavor = this.props.flavorList.find(flavor => flavor._id === this.props.flavor)
    const removeBtn = ( <input type="button" name="removeBtn" value="remove" onClick={this.handleClick} /> )
    return (
      <div>
        {flavor.brand.shortname} : {flavor.name} - {this.props.percentage}% {removeBtn}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flavorList: state.api.flavorList
})

export default connect(mapStateToProps)(RecipeFlavorItem)