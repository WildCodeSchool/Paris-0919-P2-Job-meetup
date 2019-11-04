import React from 'react';

import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import Filter from './components/Filter';
import MenuBurger from './components/MenuBurger';
import SimpleExample from './components/SimpleExample';
import { Provider } from 'react-redux';
import store from './Store/store';

import './App.css';
import ContactList from './components/ContactList';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <MenuBurger className="menuburger"/>
          <ContactList className="contact"/>
          <SimpleExample clasName="simpleexample"/>
          <Filter className="filter"/>
          <ListFilter className="listfilter"/>
          <Footer className="footer"/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
