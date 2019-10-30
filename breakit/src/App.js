import React from 'react';

import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import Filter from './components/Filter';
import MenuBurger from './components/MenuBurger';
import SimpleExample from './components/SimpleExample';
import ListMeetUp from './components/ListMeetUp';
import { Provider } from 'react-redux';
import store from './Store/store'

import './App.css';
import ContactList from './components/ContactList';


class App extends React.Component {

  render() {
    return (
      <>
      <MenuBurger className="menuburger" />
      <Provider store={store}>
        <div>
          <SimpleExample clasName="simpleexample" />
          <Filter className="filter" />
          <ListFilter className="listfilter" />
          <ContactList className="contact" />
          <ListMeetUp className="ListMeetUp" />
          <Footer className="footer" footerClick={this.footerClick} />
        </div>
      </Provider>
      </>
    );
  }
}

export default App;
