import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../../actions/apiActions'

class RecipeListItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick(event) {
    //alert(event.target.id)
    this.props.setActiveLink('view-recipe', event.target.id)
  }

  handleDelete(event) {
    this.props.deleteRecipe(this.props.token, this.props.item._id)
  }

  render() {
    
    let missing = null
    this.props.item.flavors.forEach(
      flavor => {
        this.props.orderList.forEach(order => {
          if (order._id === flavor.flavor._id) missing = (<span>missing flavors</span>) 
        })
      }
    )

    return (
      <div>
        {this.props.item.name}
        <input type="button" name="viewRecipe" value="view" id={this.props.item._id} onClick={this.handleClick}/>
        <input type="button" name="removeRecipe" value="remove" onClick={this.handleDelete}/>
        {missing}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token,
  orderList: state.api.orderList
})

export default connect (mapStateToProps, {deleteRecipe})(RecipeListItem)