import * as types from '../constant/Actions';

export const actAddToCart = (product,quantity)=>{
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}
