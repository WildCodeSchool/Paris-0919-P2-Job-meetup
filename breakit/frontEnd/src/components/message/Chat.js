import React, { createRef } from 'react'
import './animation.css'
import Formulaire from './Formulaire'
import Message from './Message'
import './Chat.css'



// Firebase
import base from './base'

// Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class Chat extends React.Component {
  state = {
    messages: {},
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }

    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })

    this.setState({ messages })
  }


  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={key}>
          <Message
            isUser={this.isUser}
            message={this.state.messages[key].message} />
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
          length={140}
          addMessage={this.addMessage} />
      </div>
    )
  }
}


export default Chat