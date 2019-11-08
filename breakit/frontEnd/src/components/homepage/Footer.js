import React from 'react';
import './Footer.css'
import pictoMail from '../img/Mail-picto.svg'



class Footer extends React.Component {
    state = {
      window: false,
    }

  afficheWindow= () => {
    this.setState({isDisplayed : !this.state.isDisplayed})
    
  }

    render() {
  
  
      return (
        
        <div></div>
      );
    }
  }
  
  export default Footer;
  