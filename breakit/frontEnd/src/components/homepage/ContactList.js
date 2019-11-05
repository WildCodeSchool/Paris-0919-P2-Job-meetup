import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'

const users = [
    {
        id: 0,
        online: true,
        firstname: 'Alex',
        lastname: 'DUPONT',
        type: 'DEV',
        languages: 'JS, React',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVGSByGX0NX8rRXpImGbZQ4n4NHkryFtNBA3OMvEZ0feLm1GT',
        alt: "",
        lat: 48.850178869459135,
        lng: 2.349871607851415,
    },
    {
        id: 1,
        online: true,
        firstname: 'Paul',
        lastname: 'FERNAND',
        type: 'DEV',
        languages: 'JS, Angular, PHP',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbgtVnxw1gie8rfEofGBhloi2Y2MBmxhCJwG3myzQFKutbPMsfQ',
        alt: "",
        lat: 48.84871206,
        lng: 2.35364914
    },
    {
        id: 2,
        online: true,
        firstname: 'Louis',
        lastname: 'DUROC',
        type: 'CTO',
        languages: 'C#, C++',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJmR2Qf3TZPlU87eGfMS2BhzBrLs-e_cnXA4f0CEHjU4Ppnq7',
        alt: "",
        lat: 48.85020172,
        lng: 2.35416949
    },
    {
        id: 3,
        online: true,
        firstname: 'ReactJS',
        type: 'MEETUP',
        languages: 'React.js',
        alt: '',
        pic: '',
        lat: 48.862725,
        lng: 2.287592
    },
    {
        id: 4,
        online: true,
        firstname: 'GoLang',
        type: 'MEETUP',
        languages: 'Go',
        alt: '',
        pic: '',
        lat: 48.8704088,
        lng: 2.3721571
    }
]




const mapStateToProps = (state) => {
    return state
}

class ContactList extends React.Component {
    state = {
        meetups : []
    }

    _userArray() {
        const action = { type: "USER_LOADED", value: users }
        this.props.dispatch(action)
    }

    // getMeetUp = async () => {
    //         const result = await axios.get(
    //             ('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=num%C3%A9rique&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&refine.category=Animations+')
    //         )
    //         this.setState({ meetups: result.data.records})
    //     }
    

    // toggleList(){
    //     const action = { type : "LIST_LOADED", value : this.state.meetups}
    //     console.log('test action', action.value)
    //     this.props.dispatch(action)
    // }

    componentDidMount() {
        this._userArray()
        // this.getMeetUp()
        // this.toggleList()

    }
    
    render() {
        // const resultat = Object.keys(this.state.meetup).map(key => <DisplayList meetup={this.props.meetup} key={key} />)
        return null
    }

}




















    // CALL MEET-UPS PARIS API
//     state = {
//         meetups: []
//     }

//     getMeetUp = () => {
//         axios
//             .get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=num%C3%A9rique&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&refine.category=Animations+`)
//             .then(res => this.setState({meetups: res.data.records}))
//     }

//     componentDidMount() {
//         this.getMeetUp()
//     }



 

//     render() {
//         console.log(this.state.meetups)
//         return null
//     }
// }


export default connect(mapStateToProps)(ContactList);