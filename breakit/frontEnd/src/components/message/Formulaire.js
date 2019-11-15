import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo-blancjaune.svg'
class Formulaire extends Component {
  state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
    const { addMessage,  length } = this.props

    const message = {
    
      message: this.state.message
    }

    addMessage(message)

    // Reset
    this.setState({ message: '', length })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
  }

  handleChange = event => {
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  render () {
    return (
      <div>
      <Link to ="/Home"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
      <form
        className='formchat'
        onSubmit={this.handleSubmit}>
        <textarea className="textareachat"
        placeholder="Ecrivez votre message ici ..."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          required
          maxLength={this.props.length} />
        <div className='info' >
          { this.state.length }
        </div>
        <button className="buttonchat" type='submit' >
          Envoyer!
        </button>
      </form>
      </div>
    )
  }
}

export default Formulaire
