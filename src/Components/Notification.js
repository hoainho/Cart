import React, { Component } from 'react'
class Message extends Component {
    render(){
        var {showMessage} = this.props
        return (
            <h3>
                <span className="badge amber darken-2"> { showMessage }</span>
            </h3>
     
       );
    }
  }
  export default Message;
  