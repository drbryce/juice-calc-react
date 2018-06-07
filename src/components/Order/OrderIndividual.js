import React, { Component } from 'react'

class OrderIndividual extends Component {
  render() {
    return (
      <div>
        {this.props.item.brand.shortname} : {this.props.item.name}
      </div>
    )
  }
}

export default OrderIndividual