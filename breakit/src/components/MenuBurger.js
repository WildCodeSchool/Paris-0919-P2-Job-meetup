import React from "react";
import Parameters from "./Parameters"
import "./MenuBurger.css";


class MenuBurger extends React.Component {
  state = {
    active: false,
  }
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({
      active : !currentState
    })
  }
  
  render() {
    return (
      <>
        <div className={this.state.active ? "change burgerContainer" : "burgerContainer"} onClick={this.toggleClass}>
          <div className="bar1"></div>
          <div className="mbar">
            <div className="mbar1"></div>
            <div className="mbar2"></div>
          </div>
          <div className="bar3"></div>
        </div>
        <div id="mnu" className={this.state.active ? "slider burgerMenu" : "burgerMenu"}>
          <a className="burgerProfilePicParent" href="#"><img src="/profilPic.png" alt="Profil" className="burgerProfilePic" /></a>
          <a className="burgerUserName" href="#">Nicolas Borson</a>
          <a className="burgerJob" href="#">Développeur full-stack</a>
          <a className="burgerContact" href="#">Contact</a>
          <a className="burgerParametres" onClick={this.props.toggleClassParameters} href="#">Paramètres</a>
          <a className="burgerDeconnexion" onClick={() => /*{ if*/ (window.confirm('Êtes-vous sur(e) de vouloir vous déconnecter ?'))/* this.onCancel(item)/* }*/} href="#">Deconnexion</a>
        </div>
      </>
    );
  }
}

export default MenuBurger;