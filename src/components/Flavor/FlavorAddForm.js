import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlavor } from '../../actions/apiActions'

class FlavorAddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brandID: '',
      flavorName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const message = {
      flavorname: this.state.flavorName,
      brand: this.state.brandID
    }
    this.props.addFlavor(this.props.token, message)
  }

  render() {

    const brands = (
      this.props.brandList.map((brand) => {
        return (
          <option key={brand._id} value={brand._id} onChange={this.handleChange}>{brand.shortname} : {brand.longname}</option>
        )
      })
    )

    return (
      <div>
        <label>Brand name:
          <select name="brandID" value={this.state.shortName} onChange={this.handleChange}>
            <option value="" disabled selected hidden>Please Choose...</option>
            {brands}
          </select>
        </label>
        <label>Flavor name:
          <input type="text" name="flavorName" value={this.state.longName} onChange={this.handleChange}/>
        </label>
        <input type="button" value="add" onClick={this.handleSubmit} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.api.token,
  brandList: state.api.brandList
})

export default connect(mapStateToProps, {addFlavor})(FlavorAddForm)