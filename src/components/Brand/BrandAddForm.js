import React, { Component } from 'react'
import DBController from '../../controllers/dbController'

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
      DBController.addBrand(this.props.token, message).then((response) => {
        console.log(response)
        this.setState({
          shortName: '',
          longName: ''
        })
        if (response.ok) {
          this.props.brandCallback()
        }
      })
    }
  }

  render() {
    return (
          <div>
            <label>Short name:
              <input type="text" name="shortName" value={this.state.shortName} onChange={this.handleChange}/>
            </label>
            <label>Short name:
              <input type="text" name="longName" value={this.state.longName} onChange={this.handleChange}/>
            </label>
            <input type="button" value="submit" onClick={this.handleSubmit}/>
          </div>
    )
  }
}

export default BrandAddForm