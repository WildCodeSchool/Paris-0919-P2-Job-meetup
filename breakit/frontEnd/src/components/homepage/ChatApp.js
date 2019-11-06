import React from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';
import './ChatMain.css'

class ChatApp extends React.Component {
    state = {
        // currentUser: null,
        currentUser: "Admin",
        currentRoom: { users: [] },
        messages: [],
        users: []
    }


    
    
    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:41cb3a44-a9e9-4d4e-af88-e950b9971365",
            userId: "Admin",
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/41cb3a44-a9e9-4d4e-af88-e950b9971365/token"
            })
        })
        chatManager
            .connect()
            .then(currentUser => {
             
                return currentUser.subscribeToRoom({
                    roomId: "10e57e84-c7b9-487c-8c8b-d580cfaf64f8",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log(error))
    }


    // this.state.currentUser.sendMessage({
        //     text,
        //     roomId: this.state.currentRoom.id
        // })
    addMessage(text) {
        
        this.state.currentUser.sendMessage({
            text,
            roomId: "10e57e84-c7b9-487c-8c8b-d580cfaf64f8"
        })
        
        
        .catch(error => console.error('error', error));
        console.log("j'execute addmessage")
    }


    render() {
        
        return (
            <div className="chatapp">
                <h2 className="chatmain-header">Let's Talk</h2>
                <ChatMessageList messages={this.state.messages} />
                <ChatInput className="chatmain-input-field" onSubmit={this.addMessage} />
            </div>
        )
    }
}

export default ChatApp;