import React from "react";
import "./ProfilInscription.css";
import logo from '../img/logo-blancjaune.svg'
import axios from 'axios'

class ProfilInscription extends React.Component {
    state = {
        id: 0,
        name: null,
        firstName: null,
        mail: null,
        password: null,
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
          firstName: this.state.firstName,
          name: this.state.name,
          mail: this.state.mail,
          password: this.state.password,
        })
      };

      checkDB = () => {
        axios.post('http://localhost:4000/api/user/signin', {
          mail: this.state.mail,
          password: this.state.password,
        })
      };


    render() {

        return (
            <div className="containerProfilInscription">
                <img src={logo} alt="logo Skills" className="logoProfilInscription"></img>
                <div>
                    <p className="inscriptionProfilInscription">Inscription</p>
                </div>

                <div className="containerMail">
                    <form className="form">
                    <input type="text" placeholder="Prénom" 
                            onChange={(e) => this.setState({ name: e.target.value })} ></input>

                        <input type="text" placeholder="Prénom" 
                            onChange={(e) => this.setState({ firstName: e.target.value })} ></input>

                        <input type="email" placeholder="Email" 
                            onChange={(e) => this.setState({ mail: e.target.value })} ></input>

                        <input type="password" placeholder="Mot de passe"
                            onChange={(e) => this.setState({ password: e.target.value })} ></input>

                        <button type="submit" id="login-button" onClick={() => this.putDataToDB()}>VALIDER</button>

                    </form>
                </div>


            </div>
        )
    }
}

export default ProfilInscription;