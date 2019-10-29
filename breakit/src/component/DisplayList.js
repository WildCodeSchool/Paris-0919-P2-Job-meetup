import React from 'react'
import './DisplayList.css'

const DisplayList = ({ meetup }) => {
    return (
        <div className="containerP">
            <div>{meetup.fields.category}</div>
            <div>{meetup.fields.title}</div>
            <div>{meetup.fields.data_start}</div>
            <img src={meetup.fields.cover_url } />
            {/* <span>{meetup.fields.geometry.coordinates}</span> */}
        </div>
    )
}

// class DisplayList extends React.Component {
//     render() {
//         return (
//             <>

//             </>
//         )
//     }
// }



export default DisplayList