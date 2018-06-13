import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  // local state var : redux store var
  recipeList: state.api.recipeList,
})

export default connect (mapStateToProps)(RecipeListItem)