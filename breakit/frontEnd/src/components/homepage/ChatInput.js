import React from 'react';
import './ChatMain.css'

class ChatInput extends React.Component {
    state = {
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
        console.log("tu es en train d'écrire")
        console.log(this.state.message)
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     this.props.onSubmit(this.state.message);
    //     this.setState({
    //         message: ''
    //     })

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.message)
        console.log("tu envoies le message")
        console.log(this.state.message)
    }

        
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="chatmain-input-field">
                <input className="chatmain-message-input" type="text" onChange={this.handleChange} value={this.state.message} />
                <input className="chatmain-message-submit" type="submit" value="send" />
            </form>
        )
    }
}
export default ChatInput;

