import React, { Component } from 'react'
import RecipeListItem from './Recipe/RecipeListItem'
import RecipeAddForm from './Recipe/RecipeAddForm'
import { connect } from 'react-redux'

class RecipePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ascending: true,
      orderBy: ''
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(event) {
    if (this.state.orderBy === event.target.id) {
      this.setState({ ascending: !this.state.ascending })
    } else {
      this.setState({
        orderBy: event.target.id,
        ascending: true
      })
    }
  }

  render() {
    let tempList = this.props.recipeList
    tempList.sort((a, b) => {
      switch (this.state.orderBy) {
        case 'name':
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return this.state.ascending ? 1 : -1
          } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return this.state.ascending ? -1 : 1
          } else {
            return 0
          }

        case 'lastMixed':
          if (a.lastMixed && b.lastMixed) {
            let dateA = new Date(a.lastMixed)
            let dateB = new Date(b.lastMixed) 
            if (dateA.getTime() > dateB.getTime()) {
              return this.state.ascending ? 1 : -1
            } else if (dateA.getTime() < dateB.getTime()) {
              return this.state.ascending ? -1 : 1
            } else {
              return 0
            }
          } else if (a.lastMixed && !b.lastMixed) {
              return this.state.ascending ? 1 : -1
          } else if (!a.lastMixed && b.lastMixed) {
              return this.state.ascending ? -1 : 1
          } else return 0

        default:
          return 0
      }
        
      
    })

    const mappedRecipeList = tempList.map((item) =>
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
                  <th scope="col" onClick={this.handleClick} id="name">Name</th>
                  <th scope="col" onClick={this.handleClick} id="rating">Rating</th>
                  <th scope="col">Missing</th>
                  <th scope="col" onClick={this.handleClick} id="lastMixed">Last Mixed</th>
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