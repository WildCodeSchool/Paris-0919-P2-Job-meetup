import React from 'react';
import './ChatMain.css'

class ChatMessageList extends React.Component {
    render() {
        return (
            <ul className="chatmain-message-list">
                {Object.keys(this.props.messages).map(key => 
                    <li key={key}>
                        {/* <h4 className="chatmain-message-sender">{this.props.message.currentUser}</h4> */}
                        <p className="chatmain-message-text">{this.props.message}</p>
                    </li>
                )}
                <li></li>
            </ul>
        )
    }
}
export default ChatMessageList;

