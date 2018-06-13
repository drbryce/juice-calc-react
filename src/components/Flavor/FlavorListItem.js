import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFlavor } from '../../actions/apiActions'

class FlavorListItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick(event) {
    // this.props.setActiveLink('view-recipe', event.target.id)
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.deleteFlavor(this.props.token, event.target.id)

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
      <div onClick={this.handleClick} id={this.props._id}>
        {this.props.brand.shortname} : {this.props.name} {reorder()}
        <input type="button" value="delete" id={this.props._id} onClick={this.handleDelete}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  token: state.api.token
})

export default connect(mapStateToProps, {deleteFlavor})(FlavorListItem)