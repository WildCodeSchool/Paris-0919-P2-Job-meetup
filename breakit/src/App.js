import React from 'react';
import './App.css';
import Welcome from './components/Welcome'

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
        <Welcome />
      </div>
    );
  }
}

export default App;
