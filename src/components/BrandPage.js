import React, { Component } from 'react'
import BrandListItem from './Brand/BrandListItem'
import BrandAddForm from './Brand/BrandAddForm'
import { connect } from 'react-redux'
import { fetchBrands } from '../actions/apiActions'

class BrandPage extends Component {
  render() {
    const mappedList = this.props.brandList.map((item) => 
      <BrandListItem {...item} key={item._id} deleteBrand={this.props.deleteBrand}/> )

    return (
      <div>
        <BrandAddForm 
          brandCallback={this.props.brandCallback}
          token={this.context.token}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Short Name</th>
              <th scope="col">Long Name</th>
              <th scope="col">Remove</th>
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
  brandList: state.api.brandList,
  token: state.api.token
})

export default connect(mapStateToProps, {fetchBrands})(BrandPage)