import React, { Component } from 'react'

class RecipeAdjustForm extends Component {

  render() {
    return (
      <div>
        <label>Volume to mix (ml)
          <input type="text" name="volume" value={this.props.volume} onChange={this.props.handleChange}/>
        </label>
        <label>VG to PG ratio (%)
          <input type="text" name="vgRatio" value={this.props.vgRatio} onChange={this.props.handleChange}/>
        </label>
        <label>Nicotine (%)
          <input type="text" name="nicPercent" value={this.props.nicPercent} onChange={this.props.handleChange}/>
        </label>
        <label>Nicotine solution strength (mg)
          <input type="text" name="nicStrength" value={this.props.nicStrength} onChange={this.props.handleChange}/>
        </label>
        <label>PG weight (mg)
          <input type="text" name="pgWeight" value={this.props.pgWeight} onChange={this.props.handleChange}/>
        </label>
        <label>VG weight (mg)
          <input type="text" name="vgWeight" value={this.props.vgWeight} onChange={this.props.handleChange}/>
        </label>
        <label>Pure nicotine weight (mg)
          <input type="text" name="pureNicWeight" value={this.props.pureNicWeight} onChange={this.props.handleChange}/>
        </label>
        <label>Flavor weight (mg)
          <input type="text" name="flavorWeight" value={this.props.flavorWeight} onChange={this.props.handleChange}/>
        </label>
      </div>
    )
  }
}

export default RecipeAdjustForm