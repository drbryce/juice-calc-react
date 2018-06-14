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
      reorder = <input type="button" value="reorder" id={this.props.id} onClick={this.handleReorder} />
    } else {
      reorder = null
    }
    return (
      <div>
        {this.props.name} - {this.props.percentage}% - Volume: {this.props.volume}ml Weight: {this.props.weight}g
        {reorder}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})
export default connect(mapStateToProps, {setOrderFlavor})(RecipeIngredient)