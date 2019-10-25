import React from 'react';
import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import './App.css';
import Filter from './components/Filter';
import MenuBurger from './components/MenuBurger';
import SimpleExample from './components/SimpleExample'

class App extends React.Component {
  state = {
    isDisplayed : false,
  }

  footerClick = () => {
    this.setState({isDisplayed : !this.state.isDisplayed})
  }

  render() {
    return (
      <div>
        <MenuBurger className="menuburger" />
        <SimpleExample className="simpleexample" state={this.state}/>
        {this.state.isDisplayed? <Filter className="filter"/> : null }
        {this.state.isDisplayed? <ListFilter className="listfilter"/> : null}
        <Footer className="footer" state={this.state} footerClick={this.footerClick}/>
      </div>
    );
  }
}

export default App;
