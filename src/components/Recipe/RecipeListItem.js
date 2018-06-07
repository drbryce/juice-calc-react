import React, { Component } from 'react'

class RecipeListItem extends Component {

  handleClick(event) {
    //alert(event.target.id)
    this.props.setActiveLink('recipe-individual')
  }
  render() {
    return (
      <div>
        <a onClick={this.handleClick} id={this.props.item._id}>{this.props.item.name}</a>
      </div>
    )
  }
}

export default RecipeListItem