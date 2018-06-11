import React, { Component } from 'react'

class BrandListItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    // this.props.setActiveLink('view-recipe', event.target.id)
  }
  render() {
    return (
      <div>
        <a onClick={this.handleClick} id={this.props._id}>
        {this.props.shortname} : {this.props.longname}</a>
      </div>
    )
  }
}

export default BrandListItem