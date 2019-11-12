import React from 'react';
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
              <Switch>
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
              </Switch>
          
        </div>
      

      
    );
  }
}
export default App;