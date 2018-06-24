import React, { Component } from 'react'
import FlavorListItem from './Flavor/FlavorListItem'
import FlavorAddForm from './Flavor/FlavorAddForm'
import { connect } from 'react-redux'
import { fetchFlavors } from '../actions/apiActions'

class FlavorPage extends Component {
  render() {
    const mappedList = this.props.flavorList.map((item) =>
      <FlavorListItem key={item._id} {...item} /> )
    return (
      <div>
        <FlavorAddForm />
        <table className="table table-striped">
          <thead>
            <tr className="d-flex">
              <th scope="col" className="col-1">Brand</th>
              <th scope="col" className="col-7">Name</th>
              <th scope="col" className="col">Reorder</th>
              <th scope="col" className="col">Delete</th>
            </tr>
          </thead>
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
  flavorList: state.api.flavorList,
  brandList: state.api.brandList,
  token: state.api.token
})

export default connect(mapStateToProps, {fetchFlavors})(FlavorPage)