import { cartItem } from './cartItem';
function Cart() {
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-r">
                    <cartItem />
                </div>
            </div>
        </section>
                
   );
  }
  
export default Cart;
  