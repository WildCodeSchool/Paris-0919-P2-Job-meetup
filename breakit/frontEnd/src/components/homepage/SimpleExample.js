import React from 'react';

import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios'
import Logo from '../img/logo-skills-noir.svg'
import './Map.css';

const mapStateToProps = (state) => {
  return state
}

class SimpleExample extends React.Component {
  state = {
    zoom: 13,
    lat: 48.849044,
    lng: 2.352831,
    meetups: [],
    Users: []
  }

  getMeetUp() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=num%C3%A9rique&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&refine.category=Animations+')
      .then(result => { this.setState({ meetups: result.data.records }) })
  }
  meetupToStore = () => {
    const action = { type: 'MEETUP_LOAD', value: this.state.meetups }
    this.props.dispatch(action)
  }
  componentDidMount() {
    this.getMeetUp();
    this.getUsersOnline()
  }

  getUsersOnline() {
    axios.get('http://localhost:4000/api/user/getOnlineUsers')
      .then(res => {
        return this.setState({ Users: res.data })
      })
  }



  render() {
    this.meetupToStore()

    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <img className="logo" src={Logo} alt='logo du site skills' />

        <Map center={position} zoom={this.state.zoom} id="leaflet-container" className={this.props.toggleFilter.isFiltered ? "miSize" : "fullSize"}>

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          {this.state.Users.map((marker, i) => {
            if (marker.online) {
              if ((this.props.toggleUsers.cto && marker.type === 'CTO') || (this.props.toggleUsers.dev && marker.type === 'Dev')) {
                return (
                  <Marker position={marker.geoLoc} key={i}>
                    <Popup>
                      <div className="popup_desc">
                        <div className="desciption">
                          <h2>{marker.firstName}<span> {marker.name}</span></h2>
                          <h3>{marker.type}</h3>
                          <h4>Languages : {marker.languages.join(' / ')}</h4>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                )
              }
            }
          })}

          {this.props.toggleList.meetups.map((marker2, i) => {
            if (this.props.toggleUsers.meetup) {
              return ( 
                <Marker position={[marker2.geometry.coordinates[1], marker2.geometry.coordinates[0]]} key={i}>
                  <Popup>
                    <div className="pop">
                      <div className="meetupdes">
                        <h2>{marker2.fields.title}</h2>
                        <h4>{marker2.fields.address_name}</h4>
                        <h4>{marker2.fields.address_street}</h4>
                            
                         {/* <Link to='/contact_url'>  {marker2.fields.contact_url} clic </Link> */}
                         <h4 onClick = { () => {window.open(marker2.fields.contact_url, "_blank")}}>Lien vers l'événement</h4>
                        <h4>{marker2.fields.address_zipcode}</h4>
                        <img className="avatar_map2" src={marker2.fields.cover_url} alt="avatar_img" />
                      </div>
                    </div>
                  </Popup>
                </Marker>
              )
            }
          }
          )}
        </Map>
      </div>

    );
  }
}

export default connect(mapStateToProps)(SimpleExample);
