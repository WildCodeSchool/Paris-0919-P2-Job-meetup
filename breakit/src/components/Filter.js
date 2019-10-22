import React from "react"
import './Filter.css'

class Filter extends React.Component {

    state = {
        openFilter: false
    }

    render() {
        return (
            <div className="filter">
                <div className="buttonfilter">
                    <button
                        className={this.state.openFilter ? 'is-open' : ' '}
                        onClick={event => {
                            const newOpenFilter = !this.state.openFilter;
                            this.setState({ openFilter: newOpenFilter });
                        }}
                    >Filter</button>
                </div>
                <div className="checkBox">
                    <label>
                        <input type="checkbox" value="Meet-up" checked></input>
                        Meet-up
                    </label>
                    <label>
                        <input type="checkbox" value="Entreprises" checked></input>
                        Entreprises
                    </label>
                </div>
            </div>    
        )
    }
}

export default Filter