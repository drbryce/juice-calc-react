import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlavor } from '../../actions/apiActions'

class FlavorAddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brandID: '',
      flavorName: '',
      shortName: ''
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
    this.setState({flavorName: ''})
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
        <form>
          <div className="form-row">
            <div className="form-group col-3">
              <select name="brandID" className="form-control" value={this.state.brandID} onChange={this.handleChange}>
                <option value="" disabled hidden>Please Choose...</option>
                {brands}
              </select>
            </div>
            <div className="form-group col-3">
              <input type="text" name="flavorName" placeholder="Flavor name" className="form-control" value={this.state.longName} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-2">
              <input type="button" className="btn btn-primary" value="add" onClick={this.handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.api.token,
  brandList: state.api.brandList
})

export default connect(mapStateToProps, {addFlavor})(FlavorAddForm)