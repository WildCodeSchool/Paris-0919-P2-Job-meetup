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
            if (this.state.myInputEmail.length >= 1) {

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
                            onChange={a => this.modifLoadName(a)} ></input>


                        <input type="text" placeholder="Prénom" value={this.state.myInputFirstName}
                            onChange={b => this.modifLoadFirstName(b)} ></input>

                        <input type="email" placeholder="Email" value={this.state.myInputEmail}
                            onChange={c => this.modifLoadEmail(c)} ></input>

                        <input type="password" placeholder="Mot de passe" value={this.state.myInputPassword}
                            onChange={d => this.modifLoadPassword(d)} ></input>

                        <button type="submit" id="login-button">Valider</button>

                    </form>
                </div>


            </div>
        )
    }
}

export default ProfilInscription;