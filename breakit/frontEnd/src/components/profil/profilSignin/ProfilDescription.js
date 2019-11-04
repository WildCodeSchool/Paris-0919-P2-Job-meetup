import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDescription.css'


class ProfilDescription extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    <p className="inscriptionUserChoice">Profil</p>
                    <p className="inscriptionUserChoice">Description</p>
                </div>

                <div className="containerChoice">
                    <form className="form">
                        <textarea name='textarea' id="story" rows="7" cols="33" placeholder="Saisissez votre besoin..."
                        ></textarea>
                    </form>
                    



                </div>

                <div className="linearBalls" >
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                    <span className="dot" onclick="currentSlide(4)"></span>
                    <span className="dot" onclick="currentSlide(5)"></span>
                    <span className="doty" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(6)"></span>                    
                </div>
                


            </div>
        )
    }
}

export default ProfilDescription