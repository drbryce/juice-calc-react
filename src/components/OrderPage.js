import React, { Component } from 'react'
import OrderIndividual from './Order/OrderIndividual'

class OrderPage extends Component {
  render() {
    const mappedList = this.props.orderList.map((item) => <li key={item._id}><OrderIndividual item={item}/></li> )
    return (
      <div>
        <ul>
          {mappedList}
        </ul>
      </div>
    )
  }
}

export default OrderPage