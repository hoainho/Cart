import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Cart from '../Components/Cart';
class CartContainer extends Component {   
    render(){
    return (
        <Cart />
    );
    }
   
  }
  const Database = state => {
    return {
      state
    }
}
const Actions = (dispatch,props) =>{
    return {
    }
}
  export default connect(Database,Actions)(CartContainer);
  


const Database = state => {
    return {
      state
    }
}
const Actions = (dispatch,props) =>{
    return {
      dispatch()
    }
}