import React, { Component } from 'react'
import RecipeListItem from './Recipe/RecipeListItem'

class RecipePage extends Component {

  render() {
    const mappedList = this.props.recipeList.map((item) => <li key={item._id}>
      <RecipeListItem 
        item={item} 
        setActiveLink={this.props.setActiveLink}
      />
    </li> )
    return (
      <div>
        <ul>
          {mappedList}
        </ul>
      </div>
    )
  }
}

export default RecipePage