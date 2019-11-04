import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilInterests.css'


class ProfilInterests extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    
                    <p className="inscriptionUserChoice">Centres d'intérêts</p>
                </div>

                <div className="containerChoice">
                    <form className="form">
                        <p> <button type="button" id="meetup-button">Meet-Up</button> </p>
                        <p> <button type="button" id="job-button">Job</button> </p>
                        <p> <button type="button" id="rencontres-button">Rencontres pro</button> </p>
                    </form>
                </div>

                <div className="linearBalls" >
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                    <span className="dot" onclick="currentSlide(4)"></span>
                    <span className="doty" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(5)"></span>
                    <span className="dot" onclick="currentSlide(6)"></span>                    
                </div>
                


            </div>
        )
    }
}

export default ProfilInterests