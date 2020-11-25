import * as types from '../constant/Actions';

export const actAddToCart = (product,quantity)=>{
    types.ADD_TO_CART,
    product,
    quantity
}
