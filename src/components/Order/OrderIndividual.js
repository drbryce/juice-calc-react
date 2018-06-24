import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unsetOrderFlavor } from '../../actions/apiActions'

class OrderIndividual extends Component {
  constructor(props) {
    super(props)

    this.handleRestock = this.handleRestock.bind(this)
  }

  handleRestock(event) {
    event.preventDefault()
    this.props.unsetOrderFlavor(this.props.token, event.target.id)
  }
  render() {
    return (
      <tr>
        <td className="col align-middle">
          {this.props.item.brand.shortname} : {this.props.item.name}
        </td>
        <td className="col-2">
          <input type="button" className="btn btn-success" value="restock" id={this.props.item._id} onClick={this.handleRestock} />
        </td>
      </tr>
    )
  }
}

const mapStateToProps = state => ({
  token: state.api.token
})

export default connect(mapStateToProps, {unsetOrderFlavor})(OrderIndividual)