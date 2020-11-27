import { combineReducers } from 'redux';
import products from './product';
import cart from './cart';
import Message from './message';
const appReducers = combineReducers({
    products,
    cart,
    Message
})
export default appReducers;