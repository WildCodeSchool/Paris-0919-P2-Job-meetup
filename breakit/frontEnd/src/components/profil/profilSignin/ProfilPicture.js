import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilPicture.css'
import avatar from '../../img/avatar.png'
import { Link } from 'react-router-dom'

class ProfilPicture extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    <p className="inscriptionUserChoice">Photo de profil</p>
                </div>

                <div className="containerChoice">
                <img src={avatar} className="avatar" />

                </div>

                <footer className="linearBalls"> 

                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                
                <div className="links">
                <Link exact to='ProfilDescription'><p><a>Précédent</a></p> </Link>       
                <p><a>Suivant</a></p>
                </div>
                
                </footer>
                
            </div>
        )
    }
}

export default ProfilPicture