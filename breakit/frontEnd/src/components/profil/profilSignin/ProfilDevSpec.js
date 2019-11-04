import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDevSpec.css'


class ProfilDevSpec extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    
                    <p className="inscriptionUserChoice">Votre specialitée</p>
                </div>

                <div className="containerChoice">
                    <form className="form">
                        <p> <button type="button" id="userFront-button">Front-end</button> </p>
                        <p> <button type="button" id="userBack-button">Back-end</button> </p>
                        <p> <button type="button" id="userFullStack-button">Fullstack</button> </p>
                    </form>
                </div>

                <div className="linearBalls" >
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="doty" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                    <span className="dot" onclick="currentSlide(4)"></span>
                    <span className="dot" onclick="currentSlide(5)"></span>
                    <span className="dot" onclick="currentSlide(6)"></span>                    
                </div>
                


            </div>
        )
    }
}

export default ProfilDevSpec