import React from "react";
import "./ProfilInscription.css";
import logo from '../../img/logo-blancjaune.svg'
import { Link } from 'react-router-dom';
class ProfilInscription extends React.Component {
    state = {
        countName: 0,
        countFirstName: 0,
        countEmail: 0,
        countPassword: 0,
        myInputName: "",
        myInputFirstName: "",
        myInputEmail: "",
        myInputPassword: "",
    }


    modifLoadName = (a) => {
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

                this.setState({ countEmail: this.state.countEmail = 25 })
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

                this.setState({ countPassword: this.state.countPassword = 25 })
            }
            else {
                this.setState({ countPassword: this.state.countPassword = 0 })
            }
        })


    }

    render() {


        const count = this.state.countName + this.state.countFirstName + this.state.countEmail + this.state.countPassword

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
        const inscriptionCount = inscriptionCounter()

        return (
            
                 <div className="containerProfilInscription">
                <img src={logo} alt="logo Skills" className="logoProfilInscription"></img>
                <div>
                    <p className="inscriptionProfilInscription">Inscription</p>
                </div>
                <div className="loader" id={loaderCount}>
                    <p className={inscriptionCount}>{count} %</p>
                </div>

                <div className="containerMail">
                    <form className="form">
                        <input type="text" placeholder="Nom" value={this.state.myInputName}
                            onChange={a => this.modifLoadName(a)} ></input>


                        <input type="text" placeholder="Prénom" value={this.state.myInputFirstName}
                            onChange={b => this.modifLoadFirstName(b)} ></input>

                        <input type="email" placeholder="Email" value={this.state.myInputEmail}
                            onChange={c => this.modifLoadEmail(c)} ></input>

                        <input type="password" placeholder="Mot de passe" value={this.state.myInputPassword}
                            onChange={d => this.modifLoadPassword(d)} ></input>

                        <Link exact to ='ProfilUserChoice'> <button type="submit" id="login-button">Valider</button>  </Link>

                    </form>
                </div>


                

            </div>

            

           
        )
    }
}

export default ProfilInscription;