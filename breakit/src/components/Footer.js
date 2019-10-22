import React from 'react';
import './Footer.css'
import map from '../components/img/mapportrait.png'
import pictoMail from '../components/img/Mail-picto.svg'



class Footer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {isToggleOn: false}
    this.masquerChoucroutte = this.masquerChoucroutte.bind(this);
  }

  masquerChoucroutte() {
    if (this.isToggleOn === false) {
    this.setState({isToggleOn :true})
    document.getElementById('choucroutte').style.display='block'
  }
  else {
    this.setState({isToggleOn : false})
    document.getElementById('choucroutte').style.display='none'
  }
    /* if (document.getElementById(choucroutte).style.display=='none') {
      )
    } else { (document.getElementById(choucroutte).style.display=='none') } */
  }

    render() {
  
  
      return (
        
        <div>
          
          <div className="map">
              <img src={map}></img>
          </div>

          <div id="choucroutte">
              <ul>
                <li>Item</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
              </ul>
            </div>
            

          <footer className="container">

            
            <div className="buttonDiv">

              <button className="button" onClick={this.masquerChoucroutte}>
              {this.state.isToggleOn ?  'On': 'A proximité'}
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
  