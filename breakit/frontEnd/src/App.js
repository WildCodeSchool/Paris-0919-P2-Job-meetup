import React from 'react';
import Footer from './components/homepage/Footer';
import ListFilter from './components/homepage/ListFilter';
import './App.css';
import Filter from './components/homepage/Filter';
import MenuBurger from './components/homepage/MenuBurger';
import SimpleExample from './components/homepage/SimpleExample'
import Parameters from './components/homepage/Parameters'
import Contact from './components/homepage/Contact'
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
        <MenuBurger toggleClassParameters={this.toggleClassParameters} activeparameters={this.state.activeparameters} toggleClassContact={this.toggleClassContact} activecontact={this.state.activecontact} className="menuburger" />
        <SimpleExample className="simpleexample" state={this.state} />
        {this.state.isDisplayed ? <Filter className="filter" /> : null}
        {this.state.isDisplayed ? <ListFilter className="listfilter" /> : null}
        <Footer className="footer" state={this.state} footerClick={this.footerClick} />
        <Contact toggleClassContact={this.toggleClassContact} activecontact={this.state.activecontact} />
        <Parameters toggleClassParameters={this.toggleClassParameters} activeparameters={this.state.activeparameters} />
      </div>
    );
  }
}

export default App;
