import React, { Component } from 'react'

class FlavorPage extends Component {
  render() {
    const mappedList = this.props.flavorList.map((item) => <li key={item._id}>{item.name}</li> )
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