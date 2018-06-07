import React, { Component } from 'react'

class BrandPage extends Component {
  render() {
    const mappedList = this.props.brandList.map((item) => <li key={item._id}>{item.shortname} : {item.longname}</li> )
    return (
      <div>
        brand page
        <ul>
          {mappedList}
        </ul>
      </div>
    )
  }
}


export default BrandPage