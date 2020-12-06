import React,{ Component } from 'react';
import { connect } from 'react-redux'
import InventoryList from './inventoryList'
class inventory extends Component {
    render(){
        return (
            <section className="section">
                
                <button type="button" class="btn btn-primary">ADD</button>
                
                <InventoryList />
            </section>       
       );
    }
  }
export default connect(null,null)(inventory);
  