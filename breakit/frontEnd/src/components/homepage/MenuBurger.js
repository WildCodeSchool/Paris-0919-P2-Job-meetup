import React from "react";
import "./MenuBurger.css";


class MenuBurger extends React.Component {
  state = {
    active: false
  }
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
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
          <a className="burgerProfilePicParent" href="https://www.google.fr/"><img src="/profilPic.png" alt="Profil" className="burgerProfilePic" /></a>
          <a className="burgerUserName" href="https://www.google.fr/">Nicolas Borson</a>
          <a className="burgerJob" href="https://www.google.fr/">Développeur full-stack</a>
          <a className="burgerContact" href="https://www.google.fr/">Contact</a>
          <a className="burgerParametres" href="https://www.google.fr/">Paramètres</a>
          <a className="burgerDeconnexion" href="https://www.google.fr/">Deconnexion</a>
        </div>
      </>
    );
  }
}

export default MenuBurger;