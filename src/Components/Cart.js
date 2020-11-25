import React,{ Component } from 'react';
import CartItem  from './CartItem';
import CartTotal from './CartTotal';
import { connect } from 'react-redux'
class Cart extends Component {
    render(){
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartTotal />
                        </tbody>
                    </table>
                </div>
            </section>       
       );
    }
  }
const Database = state => {
    return {
    }
}
export default connect(Database,null)(Cart);
  