import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBrand } from '../../actions/apiActions'

class BrandAddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shortName: '',
      longName: ''
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
    if (this.state.shortName && this.state.longName) {
      var message = {
        sname: this.state.longName,
        lname: this.state.shortName
      }
      this.props.addBrand(this.props.token, message)
      this.setState({
        shortName: '',
        longName: ''
      })
    }
  }

  render() {
    return (
        <form>
          <div className="form-row">
            <div className="col-3 form-group">
              <input type="text" 
                     name="shortName" 
                     className="form-control"
                     placeholder="Short name" 
                     value={this.state.shortName} 
                     onChange={this.handleChange}/>
            </div>
            <div className="col form-group">
              <input type="text" 
                     name="longName" 
                     className="form-control"
                     placeholder="Long name"
                     value={this.state.longName} 
                     onChange={this.handleChange}/>
            </div>
            <div className="col form-group">
              <input type="button" className="btn btn-primary" value="Add" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
    )
  }
}

const mapStateToProps = state => ({
  token: state.api.token
})

export default connect(mapStateToProps, {addBrand})(BrandAddForm)