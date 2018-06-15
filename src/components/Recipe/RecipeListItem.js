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
          if (order._id === flavor.flavor._id) missing = (<span className="badge badge-warning">missing flavors</span>) 
        })
      }
    )

    let lastMixed = 'Never'
    if (this.props.item.lastMixed) {
      let date = new Date(this.props.item.lastMixed)
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      lastMixed = year + '-' + month + '-' + dt
    }

    return (
      <div className="row">
        <div className="col-6">
          {this.props.item.name} {missing}
        </div>
        <div className="col">
          Last mixed: {lastMixed}
        </div>
        <div className="col-3">
          <div className="btn-toolbar">
            <button type="button" className="btn btn-primary btn-sm" name="viewRecipe" value="view" id={this.props.item._id} onClick={this.handleClick}>view</button>
            <button type="button" className="btn btn-danger btn-sm" name="removeRecipe" value="remove" onClick={this.handleDelete}>delete</button>
          </div>
        </div>
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