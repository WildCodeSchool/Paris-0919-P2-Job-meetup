import React from "react";
import "./ProfilConnexion.css";
import logo from '../../img/logo-blancjaune.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ProfilConnexion extends React.Component {
    state = {
        mail: null,
        password : null,
    }

      checkDB = () => {
          const body = {
            mail: this.state.mail,
            password: this.state.password,
          }
        axios.post('http://localhost:4000/api/user/signin', body)
      };

  /*   modifLoadName = (a) => {
        this.setState({
            myInputName: a.target.value
        }, _ => {
            if (this.state.myInputName.length >= 1) {

                this.setState({ countName: this.state.countName = 25 })
            }
            else {
                this.setState({ countName: this.state.countName = 0 })
            }
        })
    }

    modifLoadFirstName = (b) => {
        this.setState({
            myInputFirstName: b.target.value
        }, _ => {
            if (this.state.myInputFirstName.length >= 1) {

                this.setState({ countFirstName: this.state.countFirstName = 25 })
            }
            else {
                this.setState({ countFirstName: this.state.countFirstName = 0 })
            }
        })
    }

    modifLoadEmail = (c) => {
        this.setState({
            myInputEmail: c.target.value
        }, _ => {
            if (this.state.myInputEmail.includes('@')) {

                this.setState({ countEmail: this.state.countEmail = 50 })
            }
            else {
                this.setState({ countEmail: this.state.countEmail = 0 })
            }
        })
    }

    modifLoadPassword = (d) => {
        this.setState({
            myInputPassword: d.target.value
        }, _ => {
            if (this.state.myInputPassword.length >= 1) {

                this.setState({ countPassword: this.state.countPassword = 50 })
            }
            else {
                this.setState({ countPassword: this.state.countPassword = 0 })
            }
        })


    }
 */
    render() {


       /*  const count = this.state.countName + this.state.countFirstName + this.state.countEmail + this.state.countPassword

        const loaderCounter = () => {
            if (count === 0) {
                return "loader-1"

            } else if (count === 25) {
                return "loader-1Quart"
            } else if (count === 50) {
                return "loader-1Demi"
            } else if (count === 75) {
                return "loader-13Quart"
            } else if (count === 100) {
                return "loader-1Full"
            }
        }
        const loaderCount = loaderCounter()

        const inscriptionCounter = () => {
            if (count === 0) {
                return "inscriptionEmpty"

            } else if (count === 25) {
                return "inscriptionQuart"
            } else if (count === 50) {
                return "inscriptionDemi"
            } else if (count === 75) {
                return "inscription3Quart"
            } else if (count === 100) {
                return "inscriptionFull"
            }
        }
        const inscriptionCount = inscriptionCounter() */

        return (
            <div className="containerProfilInscription">
                <img src={logo} alt="logo Skills" className="logoProfilInscription"></img>
                <div>
                    <p className="inscriptionProfilInscription">Connexion</p>
                </div>
                {/* <div className="loader" id={loaderCount}>
                    <p className={inscriptionCount}>{count} %</p>
                </div> */}

                <div className="containerMail">
                    <form className="form">

                        <input type="email" placeholder="Email"
                            onChange={(e) => this.setState({ mail: e.target.value })} ></input>

                        <input type="password" placeholder="Mot de passe"
                            onChange={(e) => this.setState({ password: e.target.value })} ></input>

                        <button onClick={() => this.checkDB()} type="submit" id="login-button">Valider</button>
                    </form>
                    <div className="links">
                    <div className = "link_text">Not register yet ? Please <Link exact to='ProfilInscription'><p className="link_button">Sign Up</p> </Link> </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default ProfilConnexion;