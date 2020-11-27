import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as Message from '../constant/Message';
import CartItem from '../Components/CartItem';
import CartTotal from '../Components/CartTotal';
import Cart from '../Components/Cart';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';
class CartContainer extends Component {   
    render(){
      var {cart} = this.props
    return (
        <Cart>
            { this.showCart(cart) }
            { this.showCartTotal(cart)}
        </Cart> 
    );
    }
    showCart = (cart) =>{
      var result = Message.MESS_EMPTY_TO_CART;
        result = cart.map((item, index) =>{
            return <CartItem 
                    key={ index } 
                    item ={ item } 
                    index={ index } 
                    UpdateQuantity = { this.props.UpdateQuantity }
                    ChangeMessage = { this.props.ChangeMessage }
                    DeleteCart = { this.props.DeleteCart }/>
        })
      return result
    }
    
    showCartTotal = cart =>{
      return <CartTotal cart = { cart }/>
    }
  }


CartContainer.propTypes = {
  products : PropTypes.arrayOf(PropTypes.shape({
     product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.number.isRequired,
            image : PropTypes.number.isRequired,
            description : PropTypes.number.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
    }).isRequired,
    quantity : PropTypes.number.isRequired
    })
  ).isRequired
}
const Database = state =>{
  return {
    cart : state.cart
  }
}
const Actions = (dispatch,props) =>{
  return {
    UpdateQuantity : (product,quantity) => {
      dispatch(actions.actUpdateQuantity(product,quantity))
    },
    ChangeMessage : message => {
      dispatch(actions.actChangeMessage(message))
    },
    DeleteCart : product => {
      dispatch(actions.actDelToCart(product))
    }
  }

}
export default connect(Database,Actions)(CartContainer);
  