import React, { Component } from 'react'
import RecipeIngredient from './RecipeIngredient'
import RecipeAdjustForm from './RecipeAdjustForm'

class RecipeIndividual extends Component {
  render() {
    const flavors = this.props.recipe.flavors.map((flavor) => {
      const brand = flavor.flavor.brand.shortname
        return (
          <RecipeIngredient key={flavor._id}
            name={brand + ' - ' + flavor.flavor.name}
            percentage={flavor.percentage}
            type="flavor" 
          />
        )
      })

    const vg = <RecipeIngredient name="VG" percentage={5} type="other" />
    const pg = <RecipeIngredient name="PG" percentage={5} type="other" />
    const nic = <RecipeIngredient name="Nicotine" percentage={5} type="other" />
    return (
      <div>
        <h1>{this.props.recipe.name}</h1>
        {flavors}
        {vg}
        {pg}
        {nic}
        <RecipeAdjustForm />
      </div>
    )
  }
}

export default RecipeIndividual