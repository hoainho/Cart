import React,{ Component } from "react";

class CartItem extends Component {
    decrQuantity = (product,quantity) =>{
        this.props.UpdateQuantity(product,quantity)
    }
    incrQuantity = (product,quantity) =>{
        this.props.UpdateQuantity(product,quantity)
    }
    onDeleteCart = product => {
        this.props.DeleteCart(product);
    }
    priceTotal = (price,quantity) =>{
        return price * quantity
    }
    render(){
        var { item } = this.props
        return (
            <tr>
                <th scope="row">
                    <img src= { item.product.image }
                        alt={ item.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>{ item.product.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty"> { item.quantity }</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={()=>this.decrQuantity(item.product,-1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a >—</a>
                        </label>
                        <label onClick={()=>this.incrQuantity(item.product,1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a >+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.priceTotal(item.product.price,item.quantity) }$</td>
                <td>
                    <button type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" data-placement="top"
                            data-original-title="Remove item"
                            onClick={ () => { this.onDeleteCart(item.product)}}>
                        X
                    </button>
                </td>
            </tr>
    
        );
      }
      
    }
    
export default CartItem;
  