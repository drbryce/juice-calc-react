import React, { Component } from 'react'
import OrderIndividual from './Order/OrderIndividual'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  // local state var : redux store var
  orderList: state.api.orderList
})
export default connect(mapStateToProps, {})(OrderPage)