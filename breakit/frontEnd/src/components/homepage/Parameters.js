import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './Parameters.css';

const mapStateToProps = (state) => {
    return state
  }


class Parameters extends React.Component {
    state = {
        firstName : "Nicolas",
        lastName : "Borson",
        telephone : "06 06 118 712",
        mail : "nicolasborson@skills.app",
        password : "salut"
      }
     
    render() {
        return (
            <div className="slider parametersBody">
                <div className="parametersHead">
                    <Link className="parametersClose" to = "/Home" />
                    <p className="parametersParametres">Paramètres</p>
                </div>
                <div className="parametersCompteContainer">
                    <p className="parametersCompte">Compte</p>
                </div>
                <div className="parametersCompteContainer2">
                    <p className="parametersCompteInfos">Prénom</p>
                    <input className="parametersCompteInput" id="parametersPrenom" type="text" value={this.props.storeLoggedUser.user.firstName} onChange={e => this.setState({firstName: e.target.value})}></input>
                    <p className="parametersCompteInfos">Nom</p>
                    <input className="parametersCompteInput" id="parametersNom" type="text" value={this.props.storeLoggedUser.user.name} onChange={e => this.setState({mail: e.target.value})}></input>
                    <p className="parametersCompteInfos">Adresse e-mail</p>
                    <input className="parametersCompteInput" id="parametersEmail" type="text" value={this.props.storeLoggedUser.user.mail}></input>
                    <p className="parametersCompteInfos">Mot de passe</p>
                    <input className="parametersCompteInput" id="parametersMotdepasse" type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}></input>
                </div>
                <div className="parametersConfidentialiteContainer">
                    <p className="parametersConfidentialite">Confidentialité</p>
                </div>
                <div className="parametersCompteContainer2">
                    <p className="parametersCompteInfos">Localisation</p>
                    <select className="parametersCompteInput" id="parametersLocalisation">

                        <option defaultValue="Yes">Activé</option>
                        <option value="No">Desactivé</option>
                    </select>
                    <p className="parametersCompteInfos">Notifications</p>
                    <select className="parametersCompteInput" id="parametersNotifications">

                        <option defaultValue="Yes">Activé</option>
                        <option value="No">Desactivé</option>
                    </select>
                </div>
                <div className="parametersSupprimerContainer">
                    <div className='parametersSupprimer' onClick={() => /*{ if*/(window.confirm('Êtes-vous sur(e) de vouloir supprimer votre compte ?'))/* this.onCancel(item)/* }*/}>Supprimer votre compte</div>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps)(Parameters);
