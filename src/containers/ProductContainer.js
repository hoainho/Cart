import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Products';
import ProductItem from '../Components/productItem';
class ProductContainer extends Component {   
    render(){
        var { products } = this.props
        const elmProducts = products.map((product,index) => {
            return <ProductItem key={index} product={product}/>
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
  export default connect(Database,null)(ProductContainer);
  