import React from 'react'
import axios from "axios"
import { connect } from 'react-redux'
import Filter from './Filter'

const mapStateToProps = (state) => {
    return {isFiltered : state.isFiltered}
  }

class ListMeetUp extends React.Component {



    ///////Methode1////////////
    state = {
        meetups: []
    }

    
    render() {
        const { meetups } = this.state
        console.log('testmeetup', this.state.meetups)
        // const resultat = Object.keys(this.state.meetup).map(key => <DisplayList meetup={this.props.meetup} key={key} />)
        return (
            <>
                <div>

                    {meetups.map(meetup =>   console.log(meetup))}

                </div>
            </>
        )
    }

}



export default connect(mapStateToProps)(ListMeetUp)