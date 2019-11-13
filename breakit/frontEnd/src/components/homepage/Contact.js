import React from 'react';
import { Link } from 'react-router-dom'

import './Contact.css';

class Contact extends React.Component {
    render() {
        return (

            <div className="slider contactBody">
                <div className="contactHead">
                    <Link className="contactClose" to="/Home"/>

                    <p className="contactContact">Contact</p>
                </div>
                <div className="contactMentionsContainer">
                    <p className="contactMentions">Mentions légales</p>
                </div>
                <div className="contactMentionsContainer2">
                    <p className="contactMentionsInfos">Raison sociale</p>
                    <span className="contactMentionsInput">SKILLS SA</span>
                    <p className="contactMentionsInfos">Siège social</p>
                    <span className="contactMentionsInput">11 Rue de Poissy, 75005 Paris</span>
                    <p className="contactMentionsInfos">Standard</p>
                    <span className="contactMentionsInput">01 118 218 00</span>
                    <p className="contactMentionsInfos">Contact</p>
                    <span className="contactMentionsInput">contact@skills.fr</span>
                </div>
                <div className="contactConfidentialiteContainer">
                    <p className="contactConfidentialite">Assistance technique</p>
                </div>
                <div className="contactMentionsContainer2">
                    <form>
                        <label>
                            <textarea className="contactAssistance" rows="5" cols="33" name="support" placeholder="Décrivez le problème technique que vous rencontrez, faites-nous part de vos suggestions..." />
                        </label>
                        <div className="contactSendContainer">
                        <input className="contactSend" onClick={alert} type="submit" value="Envoyer" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;