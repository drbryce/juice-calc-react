import React, { Component } from 'react'
import BrandListItem from './Brand/BrandListItem'
import BrandAddForm from './Brand/BrandAddForm'

class BrandPage extends Component {
  render() {
    const mappedList = this.props.brandList.map((item) => <li key={item._id}> 
      <BrandListItem {...item} deleteBrand={this.props.deleteBrand} />
      </li> )
    return (
      <div>
        <BrandAddForm token={this.props.token} brandCallback={this.props.brandCallback}/>
        <ul>
          {mappedList}
        </ul>
      </div>
    )
  }
}


export default BrandPage