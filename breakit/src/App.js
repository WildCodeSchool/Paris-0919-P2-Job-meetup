import React from 'react';
import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import './App.css';
import Filter from './components/Filter';

class App extends React.Component {
  render() {


    return (
      <div>
        <Filter />
        <ListFilter />
        <Footer/>
      </div>
    );
  }
}

export default App;
