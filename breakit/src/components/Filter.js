import React from "react"
import './Filter.css'

class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openFilter: false
        }
    }
    render() {
        return (
            <div className="buttonfilter">
                <button
                    className={this.state.openFilter ? 'is-open' : ' '}
                    onClick={event => {
                        const newOpenFilter = !this.state.openFilter;
                        this.setState({ openFilter: newOpenFilter });
                    }}
                >Filter</button>
            </div>
            
             <div className={this.state.openFilter ? ' ' : 'is-open'}>
                <input>Meetup</input>
            </div>

                )
    }
}

export default Filter;