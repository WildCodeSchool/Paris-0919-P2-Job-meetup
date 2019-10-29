import React from 'react';

import { connect } from 'react-redux'
import Filter from './Filter'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './Map.css';

const mapStateToProps = (state) => {
  return {isFiltered : state.isFiltered}
}

class SimpleExample extends React.Component {
  state = {
      zoom: 17,
      lat: 48.849044, 
      lng: 2.352831
    }

  render() {

    const position = [this.state.lat, this.state.lng];

    return (
      <div>
        <Map center={position} zoom={this.state.zoom} id="leaflet-container" className={this.props.isFiltered ? "miSize" : "fullSize"}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
      
    );
  }
}

export default connect(mapStateToProps)(SimpleExample);