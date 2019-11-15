import React, { Component } from 'react'

class Connexion extends Component {
  state = {
    goToChat: false
  }



  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render () {

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.handleSubmit}>
          <input
            type='text'
            required />
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Connexion
