import React, { Component } from 'react'
import RecipeListItem from './Recipe/RecipeListItem'

class RecipePage extends Component {

  render() {
    const mappedList = this.props.recipeList.map((item) => <li key={item._id}>
      <RecipeListItem 
        item={item} 
        setActiveLink={this.setActiveLink}
      />
    </li> )
    return (
      <div>
        recipe page
        <ul>
          {mappedList}
        </ul>
      </div>
    )
  }
}

export default RecipePage