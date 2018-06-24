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
      <tr>
          <td className="align-middle">
            {this.props.shortname}
          </td>
          <td className="align-middle">
            {this.props.longname}
          </td>
          <td>
            <input type="button" className="btn btn-danger" value="remove" id={this.props._id}onClick={this.handleDelete}/>
          </td>
      </tr>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})
export default connect(mapStateToProps, {deleteBrand})(BrandListItem)