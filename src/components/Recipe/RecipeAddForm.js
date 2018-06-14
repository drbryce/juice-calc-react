import React, { Component } from 'react'
import { connect } from 'react-redux'



class RecipeAddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFlavor: '',
      percentage: '',
      recipeName: '',
      notes: '',
      totalFlavPercentage: '0',
      flavArray: []
    }
  }
  render() {
    const flavors = (
      this.props.flavorList.map((flavor) => {
        return (
          <option key={flavor._id} value={flavor._id} >{flavor.brand.shortname} : {flavor.name}</option>
        )
      })
    )
    return (
      <div>
        <label>Recipe name
          <input type="text" name="recipeName" />
        </label>
        <input type="button" name="addRecipe" value="Add Recipe" />
        <label>Flavor
          <select>
            {flavors}
          </select>
        </label>
        <label>Percentage
          <input type="text" name="percentage" />
        </label>
        <input type="button" name="addFlavor" value="Add Flavor" />
        <label>Notes 
          <textarea name="notes" />
        </label>
        <p>Total flavor percentage: {this.state.totalFlavPercentage}%</p>       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flavorList: state.api.flavorList
})

export default connect(mapStateToProps)(RecipeAddForm)