import React from 'react';
import ChatMessage from './ChatMessage';
import ChatApp from './ChatApp'; 
import './ChatMain.css'
import Chatkit from '@pusher/chatkit-server';

const chatkit = new Chatkit({
    instanceLocator: "v1:us1:41cb3a44-a9e9-4d4e-af88-e950b9971365",
    key: "efe0a1ca-ecff-4b24-8385-2c54c080787f:5jHSCHzDjHJhRKzAFGQLNN9h4FlUySKg3+bYy+ov8Q4="
})

class ChatMain extends React.Component {
    state = {
        currentUsername: '',
        currentId: '',
        currentView: 'ChatMessage',
    }

    createUser(username) {
        chatkit.createUser({
            id: username,
            name: username,
        })
            .then((currentUser) => {
                this.setState({
                    currentUsername: username,
                    currentId: username,
                    currentView: 'chatApp'
                })
            }).catch((err) => {
                if (err.status === 400) {
                    this.setState({
                        currentUsername: username,
                        currentId: username,
                        currentView: 'chatApp'
                    })
                } else {
                    console.log(err.status);
                }
            });
    }





    changeView = (view) => {
        this.setState({
            currentView: view
        })
    }

    render() {
        
        let view = '';
        if (this.state.currentView === "ChatMessage") {
            view = <ChatMessage changeView={this.changeView} />
        } else if (this.state.currentView === "chatApp") {
            view = <ChatApp currentId={this.state.currentId} />
        }
        return (
            <div className="ChatMain">
                {view}
            </div>
        );
    }
}

export default ChatMain

