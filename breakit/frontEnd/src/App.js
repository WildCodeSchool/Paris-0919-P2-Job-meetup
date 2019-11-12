import React from 'react';
<<<<<<< HEAD
import { Switch, Route,  } from 'react-router-dom';
import UserChoice from './components/profil/profilSignin/ProfilUserChoice';
// import ProfilPicture from './components/profil/profilSignin/ProfilPicture'
import ProfilInscription from './components/profil/profilSignin/ProfilInscription';
import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec';
import SearchLanguages from './components/profil/profilSignin/SearchLanguages'
import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
import ProfilDescription from'./components/profil/profilSignin/ProfilDescription';
import ProfilPicture from './components/profil/profilSignin/ProfilPicture';
import Languages from './components/profil/profilSignin/Languages';
import './App.css';



class App extends React.Component {
  state = {
    isDisplayed: false,
    activeparameters: false,
    activecontact: false,
  }

  footerClick = () => {
    this.setState({ isDisplayed: !this.state.isDisplayed })
=======
import { Switch, Route } from 'react-router-dom';
import UserChoice from './components/profil/profilSignin/ProfilUserChoice';
import ProfilInscription from './components/profil/profilSignin/ProfilInscription'
import ProfilDevSpec from './components/profil/profilSignin/ProfilDevSpec';
import ProfilInterests from './components/profil/profilSignin/ProfilInterests'
import ProfilDescription from'./components/profil/profilSignin/ProfilDescription';
import ProfilLanguages from './components/profil/profilSignin/ProfilLanguage';
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
>>>>>>> origin/backendUserLog
  }


class App extends React.Component {

  render() {
    console.log('app props', this.props)
    return (

        <div>
          
              <Switch>
<<<<<<< HEAD
                  {/* Ici le Home */}
                  <Route exact path="/" component={ProfilInscription} />
                  {/* Boutton inscription */}
                  <Route exact path='/ProfilUserChoice' component={UserChoice} />
                  {/* Ici Profil user choice */}
                  <Route exact path='/ProfilInscription' component={ProfilInscription}/>
                  <Route exact path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  {/* Ici ProfilDevSpec */}
                  <Route exact path='/UserChoice' component={UserChoice}/>
                  <Route exact path='/SearchLanguages' component={() => <SearchLanguages languages={Languages} />} />
                  {/* Ici Profil language */}
                  <Route exact path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  <Route exact path='/ProfilInterests' component={ProfilInterests}/>
                  {/* Ici profil interests */}
                  <Route 
                    exact path='/SearchLanguages'  
                    component={SearchLanguages} />
                  <Route exact path='/ProfilDescription' component={ProfilDescription}/>
                  {/* Ici profil description */}
                  <Route exact path='/ProfilInterests' component={ProfilInterests}/>
                  <Route exact path='/ProfilPicture' component={ProfilPicture}/>
=======
                  <Route exact path="/" component={ProfilConnexion} />
                  <Route path='/ProfilInscription' component={ProfilInscription}/>
                  <Route path='/ProfilUserChoice' component={UserChoice} />
                  <Route path='/ProfilDevSpec' component={ProfilDevSpec}/>
                  <Route path='/ProfilLanguage' component={ProfilLanguages}/>
                  <Route path='/ProfilInterests' component={ProfilInterests}/>
                  <Route path='/ProfilDescription' component={ProfilDescription}/>
                  <Route path='/ProfilPicture' component={ProfilPicture}/>
                  <PrivateRoute path="/Home" component={Home} isAuthenticated={this.props.validLog.isLoggedIn} redirect="/"/>
                  <PrivateRoute className="Parameters" path="/Contact" isAuthenticated={this.props.validLog.isLoggedIn} component={Contact} />
                  <PrivateRoute className="Parameters" path="/Parameters" isAuthenticated={this.props.validLog.isLoggedIn} component={Parameters} />
>>>>>>> origin/backendUserLog
              </Switch>
          
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
