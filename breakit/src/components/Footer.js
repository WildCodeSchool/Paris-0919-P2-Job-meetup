import React from 'react';
import './Footer.css'
import pictoMail from '../components/img/Mail-picto.svg'



class Footer extends React.Component {
    state = {
      window: false,
    }

  afficheWindow= () => {
    this.setState({isDisplayed : !this.state.isDisplayed})
    
  }

    render() {
  
  
      return (
        
        <div>

          <footer className="container">

            <div className="buttonDiv">

              <input type="button" className="button" onClick={this.props.footerClick}  value={this.props.state.isDisplayed ? "A Proximité" : "Carte"} ></input>
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
  