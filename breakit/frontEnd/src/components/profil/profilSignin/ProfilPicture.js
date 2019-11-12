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
        .then(res => {
            if (res.data === 'SignUp successfull') {
            const action = { type: 'LOG', value: this.props.LoginUser.mail,}
            this.props.dispatch(action)
            this.redirect()
        }})
      };

      redirect =()=>{
        this.props.history.push('/Home')
    }

    render() {
        return(
            <div className="containerUserProfil">
                <Link to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    <p className="inscriptionUserChoice">Photo de profil</p>
                </div>
                <div className="containerChoice">
                    <img src={avatar} className="avatar" alt="" />
                </div>

                <footer className="linearBalls"> 
                    <div className="links">
                        <Link to='/ProfilDescription'><p>Précédent</p> </Link>
                        <button onClick = {() => this.putDataToDB()} to='/ProfilPicture'><p>Valider</p> </button>
                    </div>
                </footer>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilPicture)