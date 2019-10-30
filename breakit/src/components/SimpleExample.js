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
      dev : true, 
      cto : true,
      meetup: true
    }

  render() {
    console.log('mount');
    
    const position = [this.state.lat, this.state.lng];

    console.log(this.props.toggleFilterMap.users)

    return (
      <div>

        <Map center={position} zoom={this.state.zoom} id="leaflet-container" className={this.props.toggleFilter.isFiltered ? "miSize" : "fullSize"}>
          
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          
          {this.props.toggleFilterMap.users.map(marker => {
            console.log('marker', marker);
            
         if(marker.online){
           if (this.state.cto && marker.type === 'CTO' || this.state.dev && marker.type === 'DEV' || this.state.meetup && marker.type === 'MEETUP') {
            return (
               <Marker position={[marker.lat, marker.lng]}>
                <Popup>
                  <div className ="popup_desc">
                      <div className="desciption">
                        <p>{marker.firstname}<span> {marker.lastname}</span></p>
                        <p>{marker.type}</p>
                        <p>Languages : {marker.languages}</p>
                      </div>
                      <img className="avatar_map" src={marker.pic}/>
                  </div>
                </Popup>
               </Marker>
             )}
             }
       })}
        </Map>
      </div>
      
    );
  }
}

export default connect(mapStateToProps)(SimpleExample);