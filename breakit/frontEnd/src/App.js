import React from 'react';
import { Switch, Route,  } from 'react-router-dom';
import UserChoice from './components/profil/profilSignin/ProfilUserChoice';
import ProfilInscription from './components/profil/profilSignin/ProfilInscription'
import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec';
import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
import ProfilDescription from'./components/profil/profilSignin/ProfilDescription';
import ProfilLanguages from './components/profil/profilSignin/ProfilLanguage';
import ProfilPicture from './components/profil/profilSignin/ProfilPicture';
import ProfilConnexion from './components/profil/profilLogin/ProfilConnexion';
/* import Home from './components/homepage/Home'; */


import { Provider } from 'react-redux';
import store from './Store/store';
/* import PrivateRoute from 'react-private-route' */

import './App.css';


class App extends React.Component {

  isLoggedIn() {
    return this.props.isLoggedIn;
  }

  render() {

    return (

        <div>
          <Provider store={store}>
              <Switch>
                  {/* Connexion*/}
                  <Route exact path="/" component={ProfilConnexion} />
                  {/* Ici le Home */}
                  <Route exact path="/ProfilInscription" component={ProfilInscription} />
                  {/* Boutton inscription */}
                  <Route exact path='/ProfilUserChoice' component={UserChoice} />
                  {/* Ici Profil user choice */}
                  <Route exact path='/ProfilInscription' component={ProfilInscription}/>
                  <Route exact path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  {/* Ici ProfilDevSpec */}
                  <Route exact path='/UserChoice' component={UserChoice}/>
                  <Route exact path='/ProfilLanguage' component={ProfilLanguages}/>
                  {/* Ici Profil language */}
                  <Route exact path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  <Route exact path='/ProfilInterests' component={ProfilInterests}/>
                  {/* Ici profil interests */}
                  <Route exact path='/ProfilLanguage' component={ProfilLanguages}/>
                  <Route exact path='/ProfilDescription' component={ProfilDescription}/>
                  {/* Ici profil description */}
                  <Route exact path='/ProfilInterests' component={ProfilInterests}/>
                  <Route exact path='/ProfilPicture' component={ProfilPicture}/>
                  {/* <PrivateRoute exact path="/Home" component={Home} isAuthenticated={() => !!this.isLoggedIn()}/> */}
              </Switch>

              </Provider>
          
        </div>
    );
  }
}

export default App;
