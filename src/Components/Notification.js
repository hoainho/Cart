import React, { Component } from 'react'
class Notification extends Component {
    render(){
        var {match} = this.props
        return (
            <h3>
                <h1 className="badge amber darken-2"> {`Chi tiết sản phẩm ${match.params.name}`}</h1>
            </h3>
              
     
       );
    }
  }
  export default Notification;
  