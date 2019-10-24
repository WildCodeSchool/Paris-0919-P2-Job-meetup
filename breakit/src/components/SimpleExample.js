import React from 'react';
import './Map.css';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet'

class SimpleExample extends React.Component {
  state = {
      lat: 48.849044,
      lng: 2.352831,
      zoom: 17,
    }
  

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} id="leaflet-container" className={this.props.state.isDisplayed ? "miSize" : "fullSize"}>
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
    );
  }
}


export default SimpleExample;