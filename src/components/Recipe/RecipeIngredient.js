import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setOrderFlavor } from '../../actions/apiActions'

class RecipeIngredient extends Component {
  constructor(props) {
    super(props)

    this.handleReorder = this.handleReorder.bind(this)
  }


  handleReorder(event) {
    event.preventDefault()
    this.props.setOrderFlavor(this.props.token, event.target.id)
  }

  render() {
    let reorder
    if(this.props.type === 'flavor') {
      reorder = <input type="button" value="reorder" className="btn btn-warning btn-sm" id={this.props.id} onClick={this.handleReorder} />
    } else {
      reorder = null
    }
    return (
      <tr>
        <td>
          {this.props.name}
        </td>
        <td>
          {this.props.percentage}%
        </td>
        <td>
          {this.props.volume} ml
        </td>
        <td>
         {this.props.weight} g
        </td>
        <td>
          {reorder}
        </td>
      </tr>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})
export default connect(mapStateToProps, {setOrderFlavor})(RecipeIngredient)