import React,{ Component } from 'react';
import { connect } from 'react-redux'
class inventoryItems extends Component {
    render(){
        return (
            <tr>
                <th>Image</th>
                <td>Tên</td>
                <td>Giá</td>
                <td>1</td>
                <td>
                    <button type="button" class="btn btn-success">Sửa</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </td>
            </tr>  
       );
    }
  }
export default connect(null,null)(inventoryItems);
  