import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilPicture.css'
import avatar from '../../img/avatar.png'

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
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
                <span className="dot" onclick="currentSlide(4)"></span>
                <span className="dot" onclick="currentSlide(5)"></span>
                <span className="dot" onclick="currentSlide(6)"></span>
                <span className="doty" onclick="currentSlide(1)"></span> 
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <p><a href="https://example.com">Précédent</a></p>        
                <p><a href="https://example.com">Suivant</a></p>  
                </div>
                
                </footer>
                
            </div>
        )
    }
}

export default ProfilPicture