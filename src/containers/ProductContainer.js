import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Products';
import ProductItem from '../Components/productItem';
import * as actions from '../actions/index';
class ProductContainer extends Component {   
    render(){
        var { products } = this.props
        var { AddToCart } = this.props
        const elmProducts = products.map((product,index) => {
            return <ProductItem key={index} product={product} AddToCart = { AddToCart }/>
        });
    return (
        <Products>
            { elmProducts }
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
        }
    }
}
  export default connect(Database,Actions )(ProductContainer);
  