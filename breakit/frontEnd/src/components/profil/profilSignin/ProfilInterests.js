import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilInterests.css'

import { Link } from 'react-router-dom';
class ProfilInterests extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    
                    <p className="inscriptionUserChoice">Centres d'intérêts</p>
                </div>

                <div className="containerChoiceSpec3">
                    <form className="form">
                        <p> <button type="button" id="meetup-button">Meet-Up</button> </p>
                        <p> <button type="button" id="job-button">Job</button> </p>
                        <p> <button type="button" id="rencontres-button">Rencontres pro</button> </p>
                    </form>
                </div>

                <footer className="linearBalls"> 
                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <Link exact to ="ProfilLanguage"> <p><a href="">Précédent</a></p>   </Link>     
                <Link exact to ="ProfilDescription"><p><a href="">Suivant</a></p>  </Link>
                </div>
                

                </footer>
            </div>
        )
    }
}

export default ProfilInterests