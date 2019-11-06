import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilUserChoice.css'
import { Link } from 'react-router-dom';

class UserChoice extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    <p className="inscriptionUserChoice">Profil</p>
                    <p className="inscriptionUserChoice">Vous êtes…</p>
                </div>

                <div className="containerChoice45">
                    <form className="form">
                        <p> <button type="button" id="userDev-button">Un développeur</button> </p>
                        <p> <button type="button" id="userSociety-button">Un recruteur</button> </p>
                    </form>
                </div>

                <footer className="linearBalls"> 
                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
               <Link exact to='ProfilInscription'><p><a href="">Précédent</a></p></Link>     
               <Link exact to='ProfilDevSpec'><p><a href="">Suivant</a></p> </Link> 
                </div>
                
                </footer>
                


            </div>
        )
    }
}

export default UserChoice