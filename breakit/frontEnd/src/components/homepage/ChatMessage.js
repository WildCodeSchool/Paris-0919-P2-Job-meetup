import React from 'react';
    class  ChatMessage extends React.Component {
        
        changeView = () => {
            this.props.changeView('chatApp')
            console.log("tu as changé de vue vers chatapp")
        }
        render() {
            return (
                <div>
                    <button className="chatmain-chat-button" onClick={this.changeView}>Send a message</button>
                </div>
            )
        }
    }
    export default ChatMessage;