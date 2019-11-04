import React from 'react';

import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './Map.css';

const mapStateToProps = (state) => {
  return state
}

class SimpleExample extends React.Component {
  state = {
    zoom: 17,
    lat: 48.849044,
    lng: 2.352831,
  }

  render() {

    const position = [this.state.lat, this.state.lng];

    return (
      <div>

        <Map center={position} zoom={this.state.zoom} id="leaflet-container" className={this.props.toggleFilter.isFiltered ? "miSize" : "fullSize"}>

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          {this.props.toggleFilterMap.users.map(marker => {

            if (marker.online) {
              if (this.props.toggleUsers.cto && marker.type === 'CTO' || this.props.toggleUsers.dev && marker.type === 'DEV') {
                return (
                  <Marker position={[marker.lat, marker.lng]}>
                    <Popup>
                      <div className="popup_desc">
                        <div className="desciption">
                          <p>{marker.firstname}<span> {marker.lastname}</span></p>
                          <p>{marker.type}</p>
                          <p>Languages : {marker.languages}</p>
                        </div>
                        <img className="avatar_map" src={marker.pic} />
                      </div>
                    </Popup>
                  </Marker>
                )
              }
            }
          })}
        </Map>
      </div>

    );
  }
}

export default connect(mapStateToProps)(SimpleExample);