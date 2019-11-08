import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserChoice from './components/profil/profilSignin/ProfilUserChoice';
import ProfilInscription from './components/profil/profilSignin/ProfilInscription'
import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec';
import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
import ProfilDescription from'./components/profil/profilSignin/ProfilDescription';
import ProfilLanguages from './components/profil/profilSignin/ProfilLanguage';
import ProfilPicture from './components/profil/profilSignin/ProfilPicture';
import ProfilConnexion from './components/profil/profilLogin/ProfilConnexion';
import Home from './components/homepage/Home';
import { connect } from 'react-redux'
import PrivateRoute from "./components/utils/PrivateRoute";

import './App.css';

const mapStateToProps = (state) => {
    return state
  }


class App extends React.Component {

  render() {
    console.log('app props', this.props)
    return (

        <div>
          
              <Switch>
                  {/* Connexion*/}
                  <Route exact path="/" component={ProfilConnexion} />
                  {/* Ici le Home */}
                  <Route path="/ProfilInscription" component={ProfilInscription} />
                  {/* Boutton inscription */}
                  <Route path='/ProfilUserChoice' component={UserChoice} />
                  {/* Ici Profil user choice */}
                  <Route path='/ProfilInscription' component={ProfilInscription}/>
                  <Route path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  {/* Ici ProfilDevSpec */}
                  <Route path='/UserChoice' component={UserChoice}/>
                  <Route path='/ProfilLanguage' component={ProfilLanguages}/>
                  {/* Ici Profil language */}
                  <Route path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  <Route path='/ProfilInterests' component={ProfilInterests}/>
                  {/* Ici profil interests */}
                  <Route path='/ProfilLanguage' component={ProfilLanguages}/>
                  <Route path='/ProfilDescription' component={ProfilDescription}/>
                  {/* Ici profil description */}
                  <Route path='/ProfilInterests' component={ProfilInterests}/>
                  <Route path='/ProfilPicture' component={ProfilPicture}/>
                  <PrivateRoute 
                  path="/Home"
                  component={Home}
                  isAuthenticated={this.props.validLog.isLoggedIn}
                  redirect="/"/>
              </Switch>
          
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
