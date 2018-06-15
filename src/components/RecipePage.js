import React, { Component } from 'react'
import RecipeListItem from './Recipe/RecipeListItem'
import RecipeAddForm from './Recipe/RecipeAddForm'
import { connect } from 'react-redux'

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
        <div className="row">
          <div className="col">
            <RecipeAddForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {mappedList}
            </ul>
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = state => ({
  // local state var : redux store var
  recipeList: state.api.recipeList,
})
export default connect(mapStateToProps)(RecipePage)