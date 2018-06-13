import React, { Component } from 'react'
import FlavorListItem from './Flavor/FlavorListItem'
import FlavorAddForm from './Flavor/FlavorAddForm'
import { connect } from 'react-redux'
import { fetchFlavors } from '../actions/apiActions'

class FlavorPage extends Component {
  render() {
    const mappedList = this.props.flavorList.map((item) => <li key={item._id}>
      <FlavorListItem {...item}/>
    </li> )
    return (
      <div>
        <FlavorAddForm brandList={this.props.brandList}/>
        <ul>
          {mappedList}
        </ul>
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