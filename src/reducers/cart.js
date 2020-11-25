import * as types from '../constant/Actions';
var initialState = []
var cart = (state = initialState , action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action);
        return [...state] 
        default : return [...state]
    }
}
export default cart;