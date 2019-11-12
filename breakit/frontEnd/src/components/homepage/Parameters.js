import React from 'react';
import { Link } from 'react-router-dom'

import './Parameters.css';


class Parameters extends React.Component {
    render() {
        return (
            <div className="slider parametersBody">
                <div className="parametersHead">
                    <Link class="parametersClose" to = "/Home" />
                    <p className="parametersParametres">Paramètres</p>
                </div>
                <div className="parametersCompteContainer">
                    <p className="parametersCompte">Compte</p>
                </div>
                <div className="parametersCompteContainer2">
                    <p className="parametersCompteInfos">Prénom</p>
                    <input className="parametersCompteInput" id="parametersPrenom" type="text" value="Nicolas"></input>
                    <p className="parametersCompteInfos">Nom</p>
                    <input className="parametersCompteInput" id="parametersNom" type="text" value="Borson"></input>
                    <p className="parametersCompteInfos">Numéro de téléphone</p>
                    <input className="parametersCompteInput" id="parametersNumero" type="text" value="06 06 118 712"></input>
                    <p className="parametersCompteInfos">Adresse e-mail</p>
                    <input className="parametersCompteInput" id="parametersEmail" type="text" value="nicolasborson@skills.app"></input>
                    <p className="parametersCompteInfos">Mot de passe</p>
                    <input className="parametersCompteInput" id="parametersMotdepasse" type="text" value="●●●●●●"></input>
                </div>
                <div className="parametersConfidentialiteContainer">
                    <p className="parametersConfidentialite">Confidentialité</p>
                </div>
                <div className="parametersCompteContainer2">
                    <p className="parametersCompteInfos">Localisation</p>
                    <select className="parametersCompteInput" id="parametersLocalisation">
                        <option selected value="Yes">Activé</option>
                        <option value="No">Desactivé</option>
                    </select>
                    <p className="parametersCompteInfos">Notifications</p>
                    <select className="parametersCompteInput" id="parametersNotifications">
                        <option selected value="Yes">Activé</option>
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

export default Parameters;