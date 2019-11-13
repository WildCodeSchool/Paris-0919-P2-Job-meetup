import React from "react";
import "./ProfilInscription.css";
import logo from '../../img/logo-blancjaune.svg'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return state
}

class ProfilInscription extends React.Component {
    state = {
        name : null,
        firstName : null,
        mail : null,
        password : null,
    }
      
      _userInfo(){
        const action = {type : 'USER_LOG', value : this.state}
        this.props.dispatch(action)
      }


    render() {

        return (
            
                 <div className="containerProfilInscription">
                <Link to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    <p className="inscriptionProfilInscription">Inscription</p>
                </div>

                <div className="containerMail">
                    <form className="form">
                    <input className="Inscription_input" type="text" placeholder="Nom" 
                            onChange={(e) => this.setState({ name: e.target.value })} ></input>

                        <input className="Inscription_input" type="text" placeholder="Prénom" 
                            onChange={(e) => this.setState({ firstName: e.target.value })} ></input>

                        <input className="Inscription_input" type="email" placeholder="Email" 
                            onChange={(e) => this.setState({ mail: e.target.value })} ></input>

                        <input className="Inscription_input" type="password" placeholder="Mot de passe"
                            onChange={(e) => this.setState({ password: e.target.value })} ></input>

                        <Link  onClick = {() => this._userInfo()} to ='/ProfilUserChoice'> <button type="submit" id="login-button">Valider</button>  </Link>

                    </form>
                </div>


                

            </div>

            

           
        )
    }
}

export default connect(mapStateToProps)(ProfilInscription);