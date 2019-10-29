import React from "react";
import "./ProfilInscription.css";
import logo from '../components/img/logo-blancjaune.svg'

class ProfilInscription extends React.Component {
    state= {
        count: 0,
        countName: 0,
        myInputName: "",
        myInputFirstName: "",
        myInputEmail: "",
        myInputPassword: "",
    }

    // modifCount =  e => {
    //     this.setState({count: this.count + 25 })
    // }

    modifLoad = (e) => {
        this.setState({
            myInputName: e.target.value
        }, _=>{
            if (this.state.myInputName.length >= 1) {
            
                this.setState({countName: this.state.countName = 25 })
                console.log(this.state.countName)
                
            } 
            else {
                this.setState({countName: this.state.countName = 0 })
                console.log(this.state.countName)
            }
            this.setState({count: this.state.count + this.state.countName})
            console.log(this.state.count)

        })


        
        
    }

    render() {
        return (
            <div className="containerProfilInscription">
                <img src={logo} alt="logo Skills"  className="logoProfilInscription"></img>
                <div>
                <p className="inscriptionProfilInscription">Inscription</p>
                </div>
                <div className="loader" id="loader-1">
                    <p className="pourcent">{this.state.count} %</p>
                </div>
                <div className="containerMail">
                <form className="form">
                    <input type="text" placeholder="Nom" value={this.state.myInputName}
                    onChange={e => this.modifLoad(e)} ></input>


			        <input type="text" placeholder="Prénom" value={this.state.myInputFirstName}
                    onChange={e => this.setState({myInputFirstName: e.target.value})} ></input>

			        <input type="email" placeholder="Email" value={this.state.myInputEmail}
                    onChange={e => this.setState({myInputEmail: e.target.value})} ></input>

			        <input type="password" placeholder="Mot de passe" value={this.state.myInputPassword}
                    onChange={e => this.setState({myInputPassword: e.target.value})} ></input>
                    
                    <button type="submit" id="login-button">Valider</button>

		        </form>
                </div>
                
                
            </div>
        )
    }
}

export default ProfilInscription;