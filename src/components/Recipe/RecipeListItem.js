import React, { Component } from 'react'

class RecipeListItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    //alert(event.target.id)
    this.props.setActiveLink('view-recipe', event.target.id)
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