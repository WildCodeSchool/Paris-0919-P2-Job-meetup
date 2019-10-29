import React from 'react'
import axios from "axios"
import DisplayList from "./DisplayList"

class ListMeetUp extends React.Component {
    state = {
        meetups: []
    }

    getMeetUp = async () => {
        const result = await axios.get(
            ('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=num%C3%A9rique&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&refine.category=Animations+')
        )
        this.setState({ meetups: result.data.records})
    }

    componentDidMount() {
        this.getMeetUp()
    }
    render() {
        const { meetups } = this.state
        // const resultat = Object.keys(this.state.meetup).map(key => <DisplayList meetup={this.props.meetup} key={key} />)
        return (
            <>
                <div>

                    {meetups.map(meetup =>  console.log(meetup.geometry.coordinates) || < DisplayList meetup={meetup}/>)}

                </div>
            </>
        )
    }

}



export default ListMeetUp