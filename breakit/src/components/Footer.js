import React from 'react';
import './Footer.css'
import pictoMail from '../components/img/Mail-picto.svg'
import wave from '../components/img/fond-home-fullHDsansangle.svg'


class Footer extends React.Component {
    state = {
      window: false,
    }

  afficheWindow= () => {
    this.setState({isDisplayed : !this.state.isDisplayed})
    
  }

    render() {
  
  
      return (
        
        <>


              <div className="buttonDiv">

              <input type="button" className="FisrtButton" onClick={this.props.footerClick}  value = "A Proximité"></input>

              <img src={pictoMail} alt="picto mail" className="pictoMail"></img>


            </div>
            <img src={wave} alt="picto wave"></img> 
          
          

        </>
      
      );
    }
  }
  
  export default Footer;
  