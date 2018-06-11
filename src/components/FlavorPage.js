import React, { Component } from 'react'
import FlavorListItem from './Flavor/FlavorListItem'
import FlavorAddForm from './Flavor/FlavorAddForm'

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

export default FlavorPage