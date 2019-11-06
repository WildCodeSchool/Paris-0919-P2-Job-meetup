import React from "react"
import Footer from './components/homepage/Footer';
import ListFilter from './components/homepage/ListFilter';
import Filter from './components/homepage/Filter';
import MenuBurger from './components/homepage/MenuBurger';
import SimpleExample from './components/homepage/SimpleExample';
import { Provider } from 'react-redux';
import store from './Store/store';
import ContactList from './components/homepage/ContactList';
import Parameters from './components/homepage/Parameters'
import Contact from './components/homepage/Contact'
import './App.css';


class App extends React.Component {
  state = {
    activeparameters: false,
    activecontact: false,
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
      <Provider store={store}>
        <div>
          <MenuBurger className="menuburger" toggleClassContact={this.toggleClassContact} activecontact={this.state.activecontact} toggleClassParameters={this.toggleClassParameters} activeparameters={this.state.activeparameters}/>
          <ContactList className="contact" />
          <SimpleExample clasName="simpleexample" />
          <Filter className="filter" />
          <ListFilter className="listfilter" />
          <Contact toggleClassContact={this.toggleClassContact} activecontact={this.state.activecontact} />
          <Parameters toggleClassParameters={this.toggleClassParameters} activeparameters={this.state.activeparameters} />
          <Footer className="footer" />
        </div>
      </Provider>
    );
  }
}
export default App;
