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
      <div></div>
    );
  }
}


export default SimpleExample;