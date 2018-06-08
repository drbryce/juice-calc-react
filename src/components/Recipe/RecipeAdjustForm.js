import React, { Component } from 'react'

class RecipeAdjustForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      volume: 100,
      vgRatio: 70,
      nicPercent: 2,
      nicStrength: 100,
      nicRatio: 50
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.name)
  }

  render() {
    return (
      <div>
        <label>Volume to mix (ml)
          <input type="text" name="volume" value={this.state.volume} onChange={this.handleChange}/>
        </label>
        <label>VG to PG ratio (%)
          <input type="text" name="vgRatio" value={this.state.vgRatio} onChange={this.handleChange}/>
        </label>
        <label>Nicotine (%)
          <input type="text" name="nicPercent" value={this.state.nicPercent} onChange={this.handleChange}/>
        </label>
        <label>Nicotine solution strength (mg)
          <input type="text" name="nicStrength" value={this.state.nicStrength} onChange={this.handleChange}/>
        </label>
        <label>Nicotine solution VG to PG ratio (%)
          <input type="text" name="nicRatio" value={this.state.nicRatio} onChange={this.handleChange}/>
        </label>

        
      </div>
    )
  }
}

export default RecipeAdjustForm