import React from 'react';
import ProfilPicture from './components/profil/profilSignin/ProfilPicture'
import ProfilDescription from './components/profil/profilSignin/ProfilDescription'
import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec'
import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
import ProfilUserChoice from './components/profil/profilSignin/ProfilUserChoice'

import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {


    return (
      <div>
       
       <Switch>
         <Route exact path="/" component={}
       </Switch>
        
      </div>
    );
  }
}

export default App;
