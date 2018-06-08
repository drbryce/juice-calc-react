import React, { Component } from 'react'

class RecipeIngredient extends Component {
  render() {
    return (
      <div>
        {this.props.name} - {this.props.percentage}%
      </div>
    )
  }
}

export default RecipeIngredient