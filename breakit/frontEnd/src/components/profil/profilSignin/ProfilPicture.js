import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilPicture.css'
import avatar from '../../img/avatar.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

const mapStateToProps = (state) => {
    return state
  }

class ProfilPicture extends React.Component {

    state = {
        intervalIsSet: false,
        userChecked : false
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }

    putDataToDB = () => {
        axios.post('http://localhost:4000/api/user/signup', {
            name : this.props.LoginUser.name,
            firstName : this.props.LoginUser.firstName,
            mail : this.props.LoginUser.mail,
            password : this.props.LoginUser.password,
            type : this.props.LoginUser.type,
            spec : this.props.LoginUser.spec,
            languages : this.props.LoginUser.languages,
            interest : this.props.LoginUser.interest,
            text : this.props.LoginUser.text,
        })
      };

    render() {
        console.log(this.props)
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

                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                
                <div className="links">
                <Link exact to='ProfilDescription'><p><a>Précédent</a></p> </Link>
                <Link onClick = {() => this.putDataToDB()} exact to='ProfilPicture'><p><a>Valider</a></p> </Link>      
                <p><a>Suivant</a></p>
                </div>
                </footer>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilPicture)