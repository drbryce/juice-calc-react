import React, { Component } from 'react'
import RecipeIngredient from './RecipeIngredient'
import RecipeAdjustForm from './RecipeAdjustForm'
import { connect } from 'react-redux'
import { setMixDate } from '../../actions/apiActions'

class RecipeIndividual extends Component {
  constructor(props) {
    super(props)

    this.state = {
      volume: 100,
      vgRatio: 70,
      nicPercent: 2,
      nicStrength: 100,
      nicRatio: 50,
      pgWeight: 1.038,
      vgWeight: 1.26,
      pureNicWeight: 1.01,
      flavorWeight: 1,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleMix = this.handleMix.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })

  }

  handleMix() {
    this.props.setMixDate(this.props.token, this.props.recipe._id)
  }

  // Calculations 
  nicSolutionVolume () {
    return (this.state.nicPercent * this.state.volume / this.state.nicStrength).toFixed(2)
  }
  nicSolutionWeight () {
    var nicPercent = this.state.nicStrength / 10
    var nicAmountML = this.nicSolutionVolume() * (nicPercent / 100)
    var nicAmountMG = nicAmountML * this.state.pureNicWeight
    var vgAmountML = (this.nicSolutionVolume() - nicAmountML) * (this.state.nicRatio / 100)
    var vgAmountMG = (vgAmountML * this.state.vgWeight)
    var pgAmountML = (this.nicSolutionVolume() - nicAmountML) * ((100 - this.state.nicRatio) / 100)
    var pgAmountMG = (pgAmountML * this.state.pgWeight)
    return (nicAmountMG + vgAmountMG + pgAmountMG).toFixed(2)
  }
  vgVolume() {
    return ((this.state.vgRatio / 100) * this.state.volume).toFixed(1)
  }
  pgVolume() {
    var tempNumber = 0
    this.props.recipe.flavors.forEach((flavor) => {
      tempNumber += flavor.percentage
    })
    tempNumber += this.state.vgRatio
    return (((100 - tempNumber) / 100) * this.state.volume).toFixed(1)
  }
  pgCalcWeight() {
    return (this.pgVolume() * this.state.pgWeight).toFixed(1)
  }

  render() {
    const flavors = this.props.recipe.flavors.map((flavor) => {
      const brand = flavor.flavor.brand.shortname
        return (
          <RecipeIngredient key={flavor._id}
            name={brand + ' - ' + flavor.flavor.name}
            percentage={flavor.percentage}
            volume={((flavor.percentage / 100) * this.state.volume).toFixed(1)}
            weight={(((flavor.percentage / 100) * this.state.volume) * this.state.flavorWeight).toFixed(1)}
            type="flavor"
            id={flavor.flavor._id} 
          />
        )
      })

    let mixed = 'Never'
    if (this.props.recipe.lastMixed) {
      let date = new Date(this.props.recipe.lastMixed)
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      mixed = year + '-' + month + '-' + dt
    }

    const vg = <RecipeIngredient name="VG" 
      weight={((this.state.vgRatio / 100) * this.state.volume) * this.state.vgWeight}
      volume={this.vgVolume()}
      percentage={this.state.vgRatio} 
      type="other" />
    const pg = <RecipeIngredient name="PG" 
      weight={this.pgCalcWeight()}
      volume={this.pgVolume()}
      percentage={100-this.state.vgRatio} 
      type="other" />
    const nic = <RecipeIngredient name="Nicotine" 
      volume={this.nicSolutionVolume()} 
      weight={this.nicSolutionWeight()}
      percentage={this.state.nicPercent}
      type="other" />

    return (
      <div>
        <h1>{this.props.recipe.name}</h1>
        {flavors}
        {vg}
        {pg}
        {nic}
        <p>Last mixed: {mixed}</p>
        <input type="button" value="mixed" id={this.props.recipe._id} onClick={this.handleMix}/>
        <RecipeAdjustForm {...this.state} handleChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // local state var : redux store var
  brandList: state.api.brandList,
  flavorList: state.api.flavorList,
  recipeList: state.api.recipeList,
  orderList: state.api.orderList,
  token: state.api.token
})

export default connect(mapStateToProps, {setMixDate})(RecipeIndividual)