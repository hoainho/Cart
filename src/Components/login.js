import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userName : '',
            userPassword : ''
        }
    }
    onChange = event => {
        var target = event.target
        var value = target.value
        var name = target.name
        this.setState({
            [name] : value
        })
    }
    onLogin = (event) => {
        var {userName,userPassword} = this.state
        event.preventDefault()
        if(userName === 'admin' && userPassword === 'admin'){
            localStorage.setItem('Users', JSON.stringify({
                username : userName,
                userpassword : userPassword
            }))
        }
    }
    render(){
        var loginUser = localStorage.getItem('Users')
        if(loginUser){
            return <Redirect to="/"/>
        }
        var {userName,userPassword} = this.state
        return (
            
            <form onSubmit={this.onLogin}>
                <legend>SING UP</legend>
            
                <div className="form-group">
                    <label for="">Account</label>
                    <input type="text" className="form-control" name='userName' value={userName} onChange={this.onChange} placeholder="Tài Khoản" />
                </div>
                <div className="form-group">
                    <label for="">Account</label>
                    <input type="password" className="form-control" name='userPassword' value={userPassword}onChange={this.onChange} placeholder="Mật Khẩu" />
                </div>
                <button type="submit" className="btn btn-primary">Đăng Nhập </button>
            </form>
            
       );
    }
  }
  export default login;
  