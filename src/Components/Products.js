import ProductItem from './productItem';
function Products() {
    return (
        <section className="section">
                      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                      <div className="row">
                          <div className="col-lg-4 col-md-6 mb-r">
                              <ProductItem />
                          </div>
                      </div>
                  </section>
                
    );
  }
  
  export default Products;
  