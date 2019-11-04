import React from 'react'
import logo from '../components/img/logo-blancjaune.svg'
import './UserChoice.css'


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
                        <p> <button type="button" id="userSociety-button">Une société</button> </p>
                    </form>
                </div>


            </div>
        )
    }
}

export default UserChoice