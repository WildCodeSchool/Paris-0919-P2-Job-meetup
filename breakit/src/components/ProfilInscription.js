import React from "react";
import "./ProfilInscription.css";
import logo from '../components/img/logo-blancjaune.svg'

class ProfilInscription extends React.Component {
    render() {
        return (
            <div className="containerProfilInscription">
                <img src={logo} alt="logo Skills"  className="logoProfilInscription"></img>
                <div>
                <p className="inscriptionProfilInscription">Inscription</p>
                </div>
                <div className="loader" id="loader-1">
                    <p className="pourcent">25%</p>
                </div>
                <div className="containerMail">
                <form className="form">
			        <input type="text" placeholder="Nom"></input>
			        <input type="text" placeholder="Prénom"></input>
			        <input type="email" placeholder="Email"></input>
			        <input type="password" placeholder="Mot de passe"></input>
                    <button type="submit" id="login-button">Valider</button>

		        </form>
                </div>
                
                
            </div>
        )
    }
}

export default ProfilInscription;