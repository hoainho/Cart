import * as types from '../constant/Actions';
export const actAddToCart = (product,quantity)=>{
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actDelToCart = (products)=>{
    return {
        type : types.DEL_TO_CART,
        products
    }
}
export const actUpdateQuantity = (product,quantity)=>{
    return {
        type : types.UPDATE_QUANTITY,
        product,
        quantity
    }
}
export const actChangeMessage = message =>{
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}