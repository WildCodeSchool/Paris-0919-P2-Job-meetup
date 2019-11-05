import React from 'react';

import Footer from './components/homepage/Footer';
import ListFilter from './components/homepage/ListFilter';
import Filter from './components/homepage/Filter';
import MenuBurger from './components/homepage/MenuBurger';
import SimpleExample from './components/homepage/SimpleExample';
import { Provider } from 'react-redux';
import store from './Store/store';

import './App.css';
import ContactList from './components/homepage/ContactList';


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
