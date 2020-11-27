import React, { Component } from 'react'
import Message from '../Components/Notification';
import { connect } from 'react-redux'
class MessageContainer extends Component {
    render(){
        var { showMessage, } = this.props
            return(
                <Message showMessage = { showMessage }/>
            )
    }
  }
const Database = state => {
    return {
        showMessage : state.Message
    }
}
export default connect(Database,null)(MessageContainer);
  