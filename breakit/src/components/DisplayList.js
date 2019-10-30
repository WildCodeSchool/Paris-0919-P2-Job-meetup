import React from 'react'
import {connect} from 'react-redux';
import './ListFilter.css';

const mapStateToProps = (state) => {
    return state
  }


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



export default connect(mapStateToProps)(DisplayList)