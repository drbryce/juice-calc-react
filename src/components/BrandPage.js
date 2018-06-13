import React, { Component } from 'react'
import BrandListItem from './Brand/BrandListItem'
import BrandAddForm from './Brand/BrandAddForm'
import { connect } from 'react-redux'
import { fetchBrands } from '../actions/apiActions'

class BrandPage extends Component {
  render() {
    const mappedList = this.props.brandList.map((item) => <li key={item._id}> 
      <BrandListItem {...item} deleteBrand={this.props.deleteBrand}/>
    </li> )

    return (
      <div>
        <BrandAddForm 
          brandCallback={this.props.brandCallback}
          token={this.context.token}
        />

        <ul>
          {mappedList}
        </ul>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  brandList: state.api.brandList,
  token: state.api.token
})

export default connect(mapStateToProps, {fetchBrands})(BrandPage)