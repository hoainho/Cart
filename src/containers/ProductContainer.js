import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Products';
import ProductItem from '../Components/productItem';
import { Prompt } from 'react-router-dom'
import * as actions from '../actions/index';
class ProductContainer extends Component {   
    render(){
        var { products } = this.props
        var { AddToCart,ChangeMessage } = this.props
        const elmProducts = products.map((product,index) => {
            return <ProductItem key={index} match={this.props.match} product={product} AddToCart = { AddToCart } ChangeMessage = {ChangeMessage}/>
        });
    return (
        <Products>
            { elmProducts }
            <Prompt 
                when={true}
                message = { location => (`Bạn chắc chắn chuyển qua ${location.pathname}`)}
            /> 
        </Products>
    );
    }
   
  }
  
const Database = state =>{
      return {
          products : state.products
      }
}
const Actions = (dispatch,props) =>{
    return {
        AddToCart :(product) => {
            dispatch(actions.actAddToCart(product,1))
        },
        ChangeMessage : message => {
            dispatch(actions.actChangeMessage(message))
        }
    }
}
  export default connect(Database,Actions )(ProductContainer);
  