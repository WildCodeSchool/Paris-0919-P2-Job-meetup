import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDevSpec.css'
import { Link } from 'react-router-dom';

class ProfilDevSpec extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    
                    <p className="inscriptionUserChoice">Votre specialité</p>
                </div>

                <div className="containerChoiceSpec2">
                    <form className="form">
                        <p> <button type="button" id="userFront-button">Front-end</button> </p>
                        <p> <button type="button" id="userBack-button">Back-end</button> </p>
                        <p> <button type="button" id="userFullStack-button">Fullstack</button> </p>
                    </form>
                </div>

                <footer className="linearBalls"> 
                
                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <Link exact to ="UserChoice"><p><a href="">Précédent</a></p>   </Link>     
                <Link exact to ="ProfilLanguage"><p><a href="">Suivant</a></p>  </Link>
                </div>
                
                </footer>
                


            </div>
        )
    }
}

export default ProfilDevSpec