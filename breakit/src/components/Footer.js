import React from 'react';
import './Footer.css'
import map from '../components/img/mapportrait.png'
import pictoMail from '../components/img/Mail-picto.svg'



class Footer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {window: false}
    this.afficheWindow = this.afficheWindow.bind(this);
  }

  afficheWindow() {
    if (this.window === false) {
    this.setState({window: true})
    document.getElementById('filterWindow').style.display='block'
  }
    else {
    this.setState({window: false})
    document.getElementById('filterWindow').style.display='block'
  }
  }

    render() {
  
  
      return (
        
        <div>
          
          <div className="map">
              <img src={map} alt="map"></img>
          </div>

          <footer className="container">

            <div className="buttonDiv">

              <button className="button" onClick={this.afficheWindow}>
              {this.state.window ?  'Carte': 'A proximité'}
              </button>
              <div className="pictoMail">
              <img src={pictoMail} alt="picto mail"></img>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  }
  
  export default Footer;
  