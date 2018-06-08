import React, { Component } from 'react'

class RecipeIngredient extends Component {
  render() {
    return (
      <div>
        {this.props.name} - {this.props.percentage}% - Volume: {this.props.volume}ml Weight: {this.props.weight}g
      </div>
    )
  }
}

export default RecipeIngredient