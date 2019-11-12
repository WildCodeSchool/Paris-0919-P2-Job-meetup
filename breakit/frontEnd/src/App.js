import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserChoice from './components/profil/profilSignin/ProfilUserChoice';
import ProfilInscription from './components/profil/profilSignin/ProfilInscription'
import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec';
import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
import ProfilDescription from'./components/profil/profilSignin/ProfilDescription';
import SearchLanguages from './components/profil/profilSignin/SearchLanguages';
import Languages from './components/profil/profilSignin/Languages'
import ProfilPicture from './components/profil/profilSignin/ProfilPicture';
import ProfilConnexion from './components/profil/profilLogin/ProfilConnexion';
import Parameters from './components/homepage/Parameters'
import Contact from './components/homepage/Contact'
import Home from './components/homepage/Home';
import { connect } from 'react-redux'
import PrivateRoute from "./components/utils/PrivateRoute";

import './App.css';

const mapStateToProps = (state) => {
    return state
  }


class App extends React.Component {

  render() {
    return (

        <div>
          
              <Switch>
                  <Route exact path="/" component={ProfilConnexion} />
                  <Route path='/ProfilInscription' component={ProfilInscription}/>
                  <Route path='/ProfilUserChoice' component={UserChoice} />
                  <Route path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  <Route exact path='/SearchLanguages' component={() => <SearchLanguages languages={Languages} />} />
                  {/* Ici Profil language */}
                  <Route path='/ProfilInterests' component={ProfilInterests}/>
                  <Route path='/ProfilDescription' component={ProfilDescription}/>
                  <Route path='/ProfilPicture' component={ProfilPicture}/>
                  <PrivateRoute path="/Home" component={Home} isAuthenticated={this.props.validLog.isLoggedIn} redirect="/"/>
                  <PrivateRoute className="Parameters" path="/Contact" isAuthenticated={this.props.validLog.isLoggedIn} component={Contact} />
                  <PrivateRoute className="Parameters" path="/Parameters" isAuthenticated={this.props.validLog.isLoggedIn} component={Parameters} />
              </Switch>
          
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
