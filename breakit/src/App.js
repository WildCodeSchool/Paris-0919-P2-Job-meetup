import React from 'react';
import Footer from './components/Footer'
import './App.css';
import Filter from './components/Filter';

class App extends React.Component {
  render() {


    return (
      <div>
        <Filter />
        <Footer/>
      </div>
    );
  }
}

export default App;
