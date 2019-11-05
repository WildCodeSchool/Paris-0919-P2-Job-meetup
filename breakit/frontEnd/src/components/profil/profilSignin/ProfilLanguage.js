import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDevSpec.css'
import { Link } from 'react-router-dom';


class ProfilLanguages extends React.Component {
    state = {
        languages: []
    }

    handleLanguages = (event) => {
        this.setState({languages: event.target.value}) 
    }

    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    
                    <p className="inscriptionUserChoice">Vos langages</p>
                </div>

                <div className="containerChoicel4">
                    <form className="form">
                        <input className="barSearch" placeholder='Recherche ton langage' onChange={this.handleLanguages}>

                        </input>
                    </form>
                </div>
                
                <footer className="linearBalls"> 

                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <Link exact to ="ProfilDevSpec"> <p><a href="">Précédent</a></p>   </Link>     
                <Link exact to ="ProfilInterests"><p><a href="">Suivant</a></p>  </Link>
                </div>

                </footer>
                


            </div>
        )
    }
}

export default ProfilLanguages