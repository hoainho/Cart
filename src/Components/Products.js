import React,{ Component } from 'react';
import ProductItem from './productItem';
import { connect } from 'react-redux';
class Products extends Component {   
    render(){
        var {products} = this.props;
        const elmProducts = products.map((product,index) => {
            return <ProductItem key={index} product={product}/>
        });
    return (
        <section className="section">
                      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                      <div className="row">
                          <div className="col-lg-4 col-md-6 mb-r">
                             {elmProducts}
                          </div>
                      </div>
                  </section>
                
    );
    }
   
  }
  
  const Database = state =>{
      return {
          products : state.products
      }
  }
  export default connect(Database,null)(Products);
  