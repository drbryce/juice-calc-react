import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFlavor, setOrderFlavor } from '../../actions/apiActions'

class FlavorListItem extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleReorder = this.handleReorder.bind(this)
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.deleteFlavor(this.props.token, event.target.id)
  }

  handleReorder(event) {
    event.preventDefault()
    this.props.setOrderFlavor(this.props.token, event.target.id)
  }

  render() {
    const reorder = () => { 
      if (this.props.reorder) {
        return (<span>: REORDER</span>)
      } else {
        return null
      }
    }
    return (
      <tr id={this.props._id} className="d-flex">
        <td className="align-middle col-1">
          {this.props.brand.shortname}
        </td>
        <td className="align-middle col-7">
          {this.props.name} {reorder()}
        </td>
        <td className="col">
          <input type="button" value="reorder" className="btn btn-warning" id={this.props._id} onClick={this.handleReorder} />
        </td>
        <td className="col">
          <input type="button" value="delete" className="btn btn-danger" id={this.props._id} onClick={this.handleDelete}/>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})

export default connect(mapStateToProps, {deleteFlavor, setOrderFlavor})(FlavorListItem)