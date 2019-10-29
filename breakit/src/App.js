import React from 'react';

import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import Filter from './components/Filter';
import MenuBurger from './components/MenuBurger';
import SimpleExample from './components/SimpleExample';
import { Provider } from 'react-redux';
import store from './Store/store'

import './App.css';
import ContactList from './components/ContactList';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
        <MenuBurger className="menuburger" />
        <SimpleExample clasName="simpleexample"/>
        <Filter className="filter"/>
        <ListFilter className="listfilter"/>
        <ContactList className="contact"/>
        <Footer className="footer" footerClick={this.footerClick}/>
      </div>
      </Provider>
      
    );
  }
}

export default App;
