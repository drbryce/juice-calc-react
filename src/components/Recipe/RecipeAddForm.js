import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeFlavorItem from './RecipeFlavorItem'
import { addRecipe } from '../../actions/apiActions'

class RecipeAddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFlavor: '',
      percentage: '',
      recipeName: '',
      notes: '',
      totalFlavPercentage: 0,
      flavArray: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeFlavor = this.removeFlavor.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (event.target.name === 'addFlavor' && this.state.selectedFlavor && this.state.percentage) {
      //add flavor
      let tempArray = this.state.flavArray
      tempArray.push({
        flavor: this.state.selectedFlavor,
        percentage: this.state.percentage
      })
      this.setState({
        flavArray: tempArray,
        percentage: 0,
        selectedFlavor: ''
      })
    } else if (event.target.name === 'addRecipe' && this.state.flavArray && this.state.recipeName) {
      //add recipe
      let message = {
        name: this.state.recipeName,
        flavors: this.state.flavArray,
        notes: this.state.notes
      }
      this.props.addRecipe(this.props.token, message)
      this.setState({
        flavArray: [],
        percentage: 0,
        selectedFlavor: '',
        recipeName: '',
        notes: ''
      })
    }
  }

  removeFlavor(flavorID) {
    let tempArray = this.state.flavArray.filter(item => (item.flavor !== flavorID))
    this.setState({ flavArray: tempArray})
  }

  render() {
    const flavors = (
      this.props.flavorList.map((flavor) => {
        return (
          <option key={flavor._id} value={flavor._id} >{flavor.brand.shortname} : {flavor.name}</option>
        )
      })
    )

    const addedFlavors = (
      this.state.flavArray.map((item) => {
        return (
          <RecipeFlavorItem key={item.flavor} flavor={item.flavor} percentage={item.percentage} removeFlavor={this.removeFlavor}/>
        )
      })
    )

    let totalFlavPercentage = 0
    this.state.flavArray.forEach(item => totalFlavPercentage += Number(item.percentage))
    return (
      <div>
        <label>Recipe name
          <input type="text" name="recipeName" value={this.state.recipeName} onChange={this.handleChange} />
        </label>
        <input type="button" name="addRecipe" value="Add Recipe" onClick={this.handleSubmit}/>
        <br />
        <label>Flavor
          <select name="selectedFlavor" value={this.state.selectedFlavor} onChange={this.handleChange}>
            <option value="" disabled hidden>Please Choose...</option>
            {flavors}
          </select>
        </label>
        <label>Percentage
          <input type="text" name="percentage" value={this.state.percentage} onChange={this.handleChange}/>
        </label>
        <input type="button" name="addFlavor" value="Add Flavor" onClick={this.handleSubmit}/>
        <br />
        {addedFlavors}
        <label>Notes 
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange} />
        </label>
        <p>Total flavor percentage: {totalFlavPercentage}%</p>       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flavorList: state.api.flavorList,
  token: state.api.token
})

export default connect(mapStateToProps, {addRecipe})(RecipeAddForm)