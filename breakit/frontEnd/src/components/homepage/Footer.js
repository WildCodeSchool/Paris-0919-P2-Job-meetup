import React from 'react';
import './Footer.css'
import pictoMail from '..npm/img/Mail-picto.svg'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return state
}

class Footer extends React.Component {

  _toggleFilter() {
    const action = { type: "TOGGLE_FILTER" }
    this.props.dispatch(action)
  }

  render() {
    return (
      <div>
        <footer className="container">
          <div className="buttonDiv">
            <input type="button" className="FisrtButton" onClick={() => this._toggleFilter()}
              value={this.props.toggleFilter.isFiltered ? "Carte" : "A proximité"}></input>
            <div className="pictoMail">
              <img src={pictoMail} alt="picto mail"></img>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Footer)
