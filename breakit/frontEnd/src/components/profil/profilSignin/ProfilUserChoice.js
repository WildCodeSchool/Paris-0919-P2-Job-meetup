import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilUserChoice.css'


class UserChoice extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    <p className="inscriptionUserChoice">Profil</p>
                    <p className="inscriptionUserChoice">Vous êtes…</p>
                </div>

                <div className="containerChoice">
                    <form className="form">
                        <p> <button type="button" id="userDev-button">Un développeur</button> </p>
                        <p> <button type="button" id="userSociety-button">Un recruteur</button> </p>
                    </form>
                </div>

                <div className="linearBalls" >
                    <span className="doty" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                    <span className="dot" onclick="currentSlide(4)"></span>
                    <span className="dot" onclick="currentSlide(5)"></span>
                    <span className="dot" onclick="currentSlide(6)"></span>                    
                </div>
                


            </div>
        )
    }
}

export default UserChoice