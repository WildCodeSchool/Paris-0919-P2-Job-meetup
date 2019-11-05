import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDescription.css'
import { Link } from 'react-router-dom';

class ProfilDescription extends React.Component {
    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    <p className="inscriptionUserChoice">Profil</p>
                    <p className="inscriptionUserChoice">Description</p>
                </div>

                <div className="containerChoiceDes">
                    <form className="form">
                        <textarea name='textarea' id="story" rows="7" cols="33" placeholder="Saisissez votre besoin..."
                        ></textarea>
                    </form>
                    



                </div>
                <footer className="linearBalls"> 

                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
               <Link exact to='ProfilInterests'><p><a href="">Précédent</a></p></Link>     
               <Link exact to='ProfilPicture'><p><a href="">Suivant</a></p> </Link> 
                </div>
                
                </footer>


            </div>
        )
    }
}

export default ProfilDescription