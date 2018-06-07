import React, { Component } from 'react'

class RecipeIndividual extends Component {
  render() {
    return (
      <div>
        <a href={this.props.recipe._id} onClick={alert(this.props.recipe._id)}>{this.props.recipe.name}</a>
      </div>
    )
  }
}

export default RecipeIndividual