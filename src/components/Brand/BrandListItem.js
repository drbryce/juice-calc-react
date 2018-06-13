import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteBrand } from '../../actions/apiActions'

class BrandListItem extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.deleteBrand(this.props.token, event.target.id)
  }
  render() {
    return (
      <div>
        <a onClick={this.handleClick} id={this.props._id}>
        {this.props.shortname} : {this.props.longname}</a>
        <input type="button" value="remove" id={this.props._id}onClick={this.handleDelete}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})
export default connect(mapStateToProps, {deleteBrand})(BrandListItem)