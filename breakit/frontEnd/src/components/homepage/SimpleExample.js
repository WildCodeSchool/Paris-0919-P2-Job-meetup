import React from 'react';

import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios'
import L from 'leaflet';
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
    meetups: []
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
  }



  render() {
    this.meetupToStore()

    const position = [this.state.lat, this.state.lng];

    const IconMeetup = L.icon({
      iconRetinaUrl: require('../img/icon-meetup.png'),
      iconUrl: require('../img/icon-meetup.png'),
      iconSize: new L.Point(40, 40),
    })

    const IconDev = L.icon({
      iconRetinaUrl: require('../img/icon-dev.png'),
      iconUrl: require('../img/icon-dev.png'),
      iconSize: new L.Point(40, 40),
    })

    const IconRh = L.icon({
      iconRetinaUrl: require('../img/icon-rh.png'),
      iconUrl: require('../img/icon-rh.png'),
      iconSize: new L.Point(40, 40),
    })

    return (
      <div>
        <img className="logo" src={Logo} alt='logo du site skills' />

        <Map center={position} zoom={this.state.zoom} id="leaflet-container" className={this.props.toggleFilter.isFiltered ? "miSize" : "fullSize"}>

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          {this.props.toggleFilterMap.users.map(marker => {
            if (marker.online) {
              if (this.props.toggleUsers.cto && marker.type === 'CTO' || this.props.toggleUsers.dev && marker.type === 'DEV') {
                return (
                  <Marker position={[marker.lat, marker.lng]}
                  icon={this.props.toggleUsers.cto && marker.type === 'CTO' ? IconRh : IconDev}>
                    <Popup>
                      <div className="popup_desc">
                        <div className="desciption">
                          <h2>{marker.firstname}<span> {marker.lastname}</span></h2>
                          <h3>{marker.type}</h3>
                          <h4>Languages : {marker.languages}</h4>
                        </div>
                        <img className="avatar_map" src={marker.pic} alt='position du marker' />
                      </div>
                    </Popup>
                  </Marker>
                )
              }
            }
          })}

          {this.props.toggleList.meetups.map(marker2 => {
            if (this.props.toggleUsers.meetup) {
              return (
                <Marker position={[marker2.geometry.coordinates[1], marker2.geometry.coordinates[0]]}
                  icon={IconMeetup}>
                  <Popup>
                    <div className="pop">
                      <div className="meetupdes">
                        <h2>{marker2.fields.title}</h2>
                        <h4>{marker2.fields.address_name}</h4>
                        <h4>{marker2.fields.address_street}</h4>
                        <h4>{marker2.fields.address_zipcode}</h4>
                        <img className="avatar_map2" src={marker2.fields.cover_url} />
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
