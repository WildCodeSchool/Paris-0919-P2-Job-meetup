import React from 'react';
import './Parameters.css';

class Parameters extends React.Component {
    render() {
        return (
            <div className={this.props.activeparameters ? "parametersBody" : "slider parametersBody"}>
                <div className="parametersHead">
                    <a href="#" class="parametersClose" onClick={this.props.toggleClassParameters} />
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
                    <input className="parametersCompteInput" id="parametersLocalisation" type="text" value="Oui"></input>
                    <p className="parametersCompteInfos">Notifications</p>
                    <input className="parametersCompteInput" id="parametersNotifications" type="text" value="Oui"></input>
                </div>
                <div className="parametersSupprimerContainer">
                    <p className="parametersSupprimer">Supprimer votre compte</p>
                </div>
            </div>
        );
    }
}

export default Parameters;