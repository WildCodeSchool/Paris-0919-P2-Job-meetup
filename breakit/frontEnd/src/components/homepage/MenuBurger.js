import React from "react";
import "./MenuBurger.css";


class MenuBurger extends React.Component {
  state = {
    active: false,
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
          <div className="burgerProfilePicParent" ><img src="/profilPic.png" alt="Profil" className="burgerProfilePic" /></div>
          <div className="burgerUserName" >Nicolas Borson</div>
          <div className="burgerJob" >Développeur full-stack</div>
          <div className="burgerContact" onClick={this.props.toggleClassContact} >Contact</div>
          <div className="burgerParametres" onClick={this.props.toggleClassParameters} >Paramètres</div>
          <div className="burgerDeconnexion" onClick={() => /*{ if*/ (window.confirm('Êtes-vous sur(e) de vouloir vous déconnecter ?'))/* this.onCancel(item)/* }*/} href="#">Deconnexion</div>
        </div>
      </>
    );
  }
}

export default MenuBurger;