import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import ProfilPicture from './components/profil/profilSignin/ProfilPicture'
// import ProfilDescription from './components/profil/profilSignin/ProfilDescription'
// import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec'
// import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
// import ProfilUserChoice from './components/profil/profilSignin/ProfilUserChoice'

import './App.css';
import ProfilInscription from './components/profil/profilSignin/ProfilInscription'

class App extends React.Component {
  state = {
    isDisplayed: false,
    activeparameters: false,
    activecontact: false,
  }

  footerClick = () => {
    this.setState({ isDisplayed: !this.state.isDisplayed })
  }

  toggleClassParameters = () => {
    const currentState = this.state.activeparameters;
    this.setState({
      activeparameters: !currentState
    })
  }

  toggleClassContact = () => {
    const currentState = this.state.activecontact;
    this.setState({
      activecontact: !currentState
    })
  }

  render() {
    return (
      <div>
        <ProfilInscription />
      </div>
    );
  }
}

export default App;
