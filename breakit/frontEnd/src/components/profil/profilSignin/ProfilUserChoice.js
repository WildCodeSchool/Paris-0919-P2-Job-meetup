import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilUserChoice.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }

class UserChoice extends React.Component {
    state = {
        type : null,
    }

    _userInfo(){
        const action = {type : 'USER_TYPE', value : this.state}
        this.props.dispatch(action)
      }

    render() {
        return(
            <div className="containerUserProfil">
                <Link exact to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    <p className="inscriptionUserChoice">Profil</p>
                    <p className="inscriptionUserChoice">Vous êtes…</p>
                </div>

                <div className="containerChoice45">
                    <form className="form">
                        <p> <button className="Choice_button" onClick={() => this.setState({ type: 'Dev' })} type="button" id="userDev-button">Un développeur</button> </p>
                        <p> <button className="Choice_button" onClick={() => this.setState({ type: 'CTO' })} type="button" id="userSociety-button">Un recruteur</button> </p>
                    </form>
                </div>

                <footer className="linearBalls"> 

                <div className="links">
               <Link to='/ProfilInscription'><p>Précédent</p></Link>     
               <Link onClick = {() => this._userInfo()} to='/ProfilDevSpec'><p>Suivant</p> </Link> 
                </div>
                
                </footer>
                


            </div>
        )
    }
}

export default connect(mapStateToProps)(UserChoice)