import React from 'react';
import './Footer.css'
import pictoMail from '../components/img/Mail-picto.svg'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {isFiltered : state.isFiltered}
}

class Footer extends React.Component {

  _toggleFilter() {
    const action = {type: "TOGGLE_FILTER"}
    this.props.dispatch(action)
  }


    render() {

      return (
        <div>
          <footer className="container">
            <div className="buttonDiv">
<<<<<<< HEAD
              <input type="button" className="FisrtButton" onClick={() => this._toggleFilter()}  value = {this.props.isFiltered ? "Carte" : "A proximité"}></input>
=======

              <input type="button" className="button" onClick={this.props.footerClick}  value={this.props.state.isDisplayed ? "Carte" : "A Proximité"} ></input>
>>>>>>> homepages
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
  