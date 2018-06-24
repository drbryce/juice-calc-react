import React, { Component } from 'react'

class RecipeAdjustForm extends Component {

  render() {
    return (
      <div>
        <form>
          <div className="form-row">
            <label htmlFor="volume" className="col-3 col-form-label">Volume to mix (ml)</label>
            <div className="col-3">
              <input type="text" name="volume" className="form-control" value={this.props.volume} onChange={this.props.handleChange}/>
            </div>
            <label htmlFor="vgRatio" className="col-3 col-form-label">VG to PG ratio (%)</label>
            <div className="col-3">
              <input type="text" name="vgRatio" className="form-control" value={this.props.vgRatio} onChange={this.props.handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="nicPercent" className="col-3 col-form-label">Nicotine (%)</label>
            <div className="col-3">
              <input type="text" name="nicPercent" className="form-control" value={this.props.nicPercent} onChange={this.props.handleChange}/>
            </div>
            <label htmlFor="nicStrength" className="col-3 col-form-label">Nicotine solution strength (mg)</label>
            <div className="col-3">
              <input type="text" name="nicStrength" className="form-control" value={this.props.nicStrength} onChange={this.props.handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="pgWeight" className="col-3 col-form-label">PG weight (mg)</label>
            <div className="col-3">
              <input type="text" name="pgWeight" className="form-control" value={this.props.pgWeight} onChange={this.props.handleChange}/>
            </div>
            <label htmlFor="vgweight" className="col-3 col-form-label">VG weight (mg)</label>
            <div className="col-3">
              <input type="text" name="vgWeight" className="form-control" value={this.props.vgWeight} onChange={this.props.handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="pureNicWeight" className="col-3 col-form-label">Pure nicotine weight (mg)</label>
            <div className="col-3">
              <input type="text" name="pureNicWeight" className="form-control" value={this.props.pureNicWeight} onChange={this.props.handleChange}/>
            </div>
            <label htmlFor="flavorWeight" className="col-3 col-form-label">Flavor weight (mg)</label>
            <div className="col-3">
              <input type="text" name="flavorWeight" className="form-control" value={this.props.flavorWeight} onChange={this.props.handleChange}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default RecipeAdjustForm