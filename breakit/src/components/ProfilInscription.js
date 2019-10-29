import React from "react";
import "./ProfilInscription.css";
import logo from '../components/img/logo-blancjaune.svg'

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

    modifLoadName = (e) => {
        this.setState({
            myInputName: e.target.value
        }, _ => {
            if (this.state.myInputName.length >= 1) {

                this.setState({ countName: this.state.countName = 25 })
            }
            else {
                this.setState({ countName: this.state.countName = 0 })
            }
        })
    }

    modifLoadFirstName = (e) => {
        this.setState({
            myInputFirstName: e.target.value
        }, _ => {
            if (this.state.myInputFirstName.length >= 1) {

                this.setState({ countName: this.state.countFirstName = 25 })
            }
            else {
                this.setState({ countName: this.state.countFirstName = 0 })
            }
        })
    }

    modifLoadEmail = (e) => {
        this.setState({
            myInputEmail: e.target.value
        }, _ => {
            if (this.state.myInputEmail.length >= 1) {

                this.setState({ countName: this.state.countEmail = 25 })
            }
            else {
                this.setState({ countName: this.state.countEmail = 0 })
            }
        })
    }

    modifLoadPassword = (e) => {
        this.setState({
            myInputPassword: e.target.value
        }, _ => {
            if (this.state.myInputPassword.length >= 1) {

                this.setState({ countName: this.state.countPassword = 25 })
            }
            else {
                this.setState({ countName: this.state.countPassword = 0 })
            }
        })
    }

    render() {
        const count = this.state.countName + this.state.countFirstName + this.state.countEmail + this.state.countPassword
        return (
            <div className="containerProfilInscription">
                <img src={logo} alt="logo Skills" className="logoProfilInscription"></img>
                <div>
                    <p className="inscriptionProfilInscription">Inscription</p>
                </div>
                <div className="loader" id="loader-1">
                    <p className="pourcent">{count} %</p>
                </div>
                <div className="containerMail">
                    <form className="form">
                        <input type="text" placeholder="Nom" value={this.state.myInputName}
                            onChange={e => this.modifLoadName(e)} ></input>


                        <input type="text" placeholder="Prénom" value={this.state.myInputFirstName}
                            onChange={e => this.modifLoadFirstName(e)} ></input>

                        <input type="email" placeholder="Email" value={this.state.myInputEmail}
                            onChange={e => this.modifLoadEmail(e)} ></input>

                        <input type="password" placeholder="Mot de passe" value={this.state.myInputPassword}
                            onChange={e => this.modifLoadPassword(e)} ></input>

                        <button type="submit" id="login-button">Valider</button>

                    </form>
                </div>


            </div>
        )
    }
}

export default ProfilInscription;