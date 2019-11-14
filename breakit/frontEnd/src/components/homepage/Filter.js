import React from "react"

import { connect } from 'react-redux';

import './Filter.css'

const mapStateToProps = (state) => {
  return state
}

class Filter extends React.Component {
  state = {
    active: false,
    openFilter: false,
    value: 2,
    meetups: []
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  toggleUsers = (key) => {

    const action = { type: key }
    this.props.dispatch(action)
  }
  toggleRange = (key) => {
    const action = { type: key }
    this.props.dispatch(action)
  }

  render() {
    return (
      <div className="filter">
        {this.props.toggleFilter.isFiltered ?
          <div>
            <div className="buttonfilter" onClick={this.toggleClass}>
              <button id = "button_filter_1"
                className={this.state.openFilter ? 'is-open' : ' '}
                onClick={event => {
                  const newOpenFilter = !this.state.openFilter;
                  this.setState({ openFilter: newOpenFilter });
                }}
              >Filter</button>
            </div>
            <form id ="Filter_form" className={this.state.active ? "slider checkBox" : "checkBox"}>
              <div className="check-meet-up">
                <label >
                  <input className="inputCheck" type="checkbox" value="Meet-up" onClick={() => this.toggleUsers('MEETUP_ON')}></input>
                  Meet-up
                </label>
              </div>
              <div className="check-entreprise">
                <label>
                  <input className="inputCheck" type="checkbox" value="Entreprises" onClick={() => this.toggleUsers('CTO_ON')}></input>
                  Entreprises
                </label>
              </div>
              <div className="check-cowork">
                <label>
                  <input className="inputCheck" type="checkbox" value="Cafés-Coworking" onClick={() => this.toggleUsers('DEV_ON')}></input>
                  Developpeurs
                </label>
              </div>
            </form>
          </div>
          : null}
      </div >
    )
  }
}
export default connect(mapStateToProps)(Filter)
