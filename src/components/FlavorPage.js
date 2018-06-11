import React, { Component } from 'react'
import FlavorListItem from './Flavor/FlavorListItem'

class FlavorPage extends Component {
  render() {
    const mappedList = this.props.flavorList.map((item) => <li key={item._id}>
      <FlavorListItem {...item}/>
    </li> )
    return (
      <div>
        <ul>
          {mappedList}
        </ul>
      </div>
    )
  }
}

export default FlavorPage