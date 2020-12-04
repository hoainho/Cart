import React, { Component } from 'react'; 
import * as message from '../constant/Message';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
class ProductItem extends Component {
    
    showRating(rating){
        var totalRating = []
        for(var i = 1; i <= rating ; i ++){
            totalRating.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= (5-rating) ; j++){
            totalRating.push(<i key={i+j} className="fa fa-star-o" ></i>);
        }
        return totalRating;
    };
    onAddToCart = (product) =>{
        this.props.AddToCart(product)
        if(product.inventory > 0){
            toast.success(message.MESS_ADD_TO_CART)
        }
        else{
            toast.warning(message.MESS_ERROR_TO_CART)
        }
    }
    render(){
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                    <a href="/">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <NavLink  to={`${product.name}/${product.slug}`}>{product.name}</NavLink>
                        </strong>
                    </h4>   
                    <ul className="rating">
                        <li>
                            {this.showRating(product.rating)}
                        </li>
                    </ul>
                    <p className="card-text">
                    {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                            <button 
                            className="btn-floating blue-gradient" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            data-original-title="Add to Cart"
                            onClick ={ () => {this.onAddToCart(product)} }
                           >
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        );
    }

  }
  
  export default ProductItem;
  