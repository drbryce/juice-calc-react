import React, { Component } from 'react'
import RecipeListItem from './Recipe/RecipeListItem'
import RecipeAddForm from './Recipe/RecipeAddForm'
import { connect } from 'react-redux'

class RecipePage extends Component {

  render() {
    const mappedRecipeList = this.props.recipeList.map((item) =>
      <RecipeListItem
        key={item._id} 
        item={item} 
        setActiveLink={this.props.setActiveLink}
      /> )
    return (
      <div>
        <div className="row">
          <div className="col">
            <RecipeAddForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Missing</th>
                  <th scope="col">Last Mixed</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {mappedRecipeList}
              </tbody>
            </table>
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