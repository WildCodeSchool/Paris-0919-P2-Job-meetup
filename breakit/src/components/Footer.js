import React from 'react';
import './Footer.css'
import map from '../components/img/mapportrait.png'
import pictoMail from '../components/img/Mail-picto.svg'
class Footer extends React.Component {
    render() {
  
  
      return (
       
        <div>
          
          <div className="map">
              <img src={map}></img>
          </div>
          <footer className="container">
            <div className="buttonDiv">

            <button className="button">
              A proximité
            </button>

            <div className="pictoMail">
            <img src={pictoMail}></img>
            </div>
            </div>
          
          </footer>

        </div>
      );
    }
  }
  
  export default Footer;
  