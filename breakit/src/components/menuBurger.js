import React from "react";
import "./menuBurger.css";

class menuBurger extends React.Component {
  render() {
    const xshaper = (x) => {
      x.classList.toggle("change");
      var y = document.getElementById("mnu");
      y.classList.toggle("slider");
    }
    return (
      <>
        <div class="burgerContainer" onclick={xshaper(this)}>
          <div class="bar1"></div>
          <div class="mbar">
            <div class="mbar1"></div>
            <div class="mbar2"></div>
          </div>
          <div class="bar3"></div>
        </div>
        <div id="mnu" class="burgerMenu">
          <a class="burgerProfilePicParent" href="#"><img src="profilPic.png" alt="Profile picture" class="burgerProfilePic" /></a>
          <a class="burgerUserName" href="#">Nicolas Borson</a>
          <a class="burgerJob" href="#">Développeur full-stack</a>
          <a class="burgerContact" href="#">Contact</a>
          <a class="burgerParametres" href="#">Paramètres</a>
          <a class="burgerDeconnexion" href="#">Deconnexion</a>
        </div>
      </>
    )
  }
}



export default menuBurger;