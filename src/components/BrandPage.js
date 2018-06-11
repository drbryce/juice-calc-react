import React, { Component } from 'react'
import BrandListItem from './Brand/BrandListItem'

class BrandPage extends Component {
  render() {
    const mappedList = this.props.brandList.map((item) => <li key={item._id}> 
      <BrandListItem {...item} />
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


export default BrandPage