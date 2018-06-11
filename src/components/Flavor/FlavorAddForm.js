import React, { Component } from 'react'

class FlavorAddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brandName: '',
      flavorName: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {

    const brands = this.props.brandList.map((brand) => {
      return (
        <option key={brand._id} value={brand._id} onChange={this.handleChange}>{brand.shortname} : {brand.longname}</option>
      )
    })

    return (
      <div>
        <label>Brand name:
          <select name="brandName" value={this.state.shortName} onChange={this.handleChange}>
            {brands}
          </select>
        </label>
        <label>Flavor name:
          <input type="text" name="flavorName" value={this.state.longName} onChange={this.handleChange}/>
        </label>
        <input type="button" value="add" />
      </div>
    )
  }
}

export default FlavorAddForm