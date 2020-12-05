import React, { Component } from 'react'
import { Route, Link  } from 'react-router-dom'
const items = [ 
    {
        label : 'Trang Chủ',
        exact : true,
        to : '/'
    },
    {
        label : 'Cart',
        exact : false,
        to : '/Cart'
    },
    {
        label : 'Login',
        exact : false,
        to : '/Login'
    }
]
const LinkCustom = ( {exactCheck, to, label} ) => {
    return (
        <Route  path={to} exact ={exactCheck} children = { ({match}) =>{
            var active = match ? "breadcrumb-item active" : "breadcrumb-item"
            return (
                <li  className={active}>
                        <Link to={to} className="my-link">
                          {label}
                        </Link>
                </li>
            )
        }}/>
    )}

class menuLink extends Component {
     showMenuLink = (items) => {
        if(items.length > 0){
            const result = items.map( (item,index) => {
                return (
                    <LinkCustom key={index} label={item.label} exact={item.exact} to={item.to} />
                )
            })
            return result
        }
    }
    render(){
        return (
            <div className="breadcrumb-dn mr-auto">
                <ol className="breadcrumb header-breadcrumb">
                    {this.showMenuLink(items)}
                </ol>
            </div>
        );
    }
   
  }
  
  export default menuLink;
  