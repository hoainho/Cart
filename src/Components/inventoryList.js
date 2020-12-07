import React,{ Component } from 'react';
import InventoryItems from './inventoryItems';
class inventoryList extends Component {
    render(){
        return (
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Hành động</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <InventoryItems />
                    </tbody>
                </table>
            </div>    
       );
    }
  }
export default inventoryList;
  