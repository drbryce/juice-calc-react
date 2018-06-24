import React, { Component } from 'react'
import OrderIndividual from './Order/OrderIndividual'
import { connect } from 'react-redux'

class OrderPage extends Component {
  render() {
    const mappedList = this.props.orderList.map((item) => 
      <OrderIndividual key={item._id} item={item}/> )
    return (
      <div>
        <table className="table table-striped">
          <tbody>
            {mappedList}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  orderList: state.api.orderList
})
export default connect(mapStateToProps, {})(OrderPage)