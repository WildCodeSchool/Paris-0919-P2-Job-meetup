import React from 'react';
import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import './App.css';
import Filter from './components/Filter';
import MenuBurger from './components/MenuBurger';

class App extends React.Component {
  render() {
    return (
      <div>
        <MenuBurger />
        <Filter />
        <ListFilter />
        <Footer/>
      </div>
    );
  }
}

export default App;
