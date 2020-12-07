import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as Message from '../constant/Message';
import InventoryList from '../Components/inventoryList';
import InventoryItem from '../Components/inventoryItems';
import Inventory from '../Components/inventory';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';
class inventoryContainer extends Component {   
    render(){
      var {inventory} = this.props
    return (
          <Inventory>
              { this.showCart(inventory) }
              { this.showCartTotal(inventory)}
          </Inventory> 
      );
    }
    showCart = (inventory) =>{
      var result = Message.MESS_EMPTY_TO_CART;
      if(inventory.length > 0 ){
        result = inventory.map((item, index) =>{
          return <InventoryItem 
                  key={ index } 
                  item ={ item } 
                  index={ index } 
                  UpdateQuantity = { this.props.UpdateQuantity }
                  ChangeMessage = { this.props.ChangeMessage }
                  DeleteCart = { this.props.DeleteCart }/>
      })
      }
      return result
    }
    
    showCartTotal = inventory =>{
      return <InventoryList inventory = { inventory }/>
    }
  }


  inventoryContainer.propTypes = {
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
    inventory : state.cart
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
export default connect(Database,Actions)(inventoryContainer);
  