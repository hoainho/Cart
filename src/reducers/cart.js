import * as types from '../constant/Actions';
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []
var cart = (state = initialState , action) => {
    var { product , quantity ,products} = action
    var index = -1
    var i = 0;
    switch(action.type){
        case types.ADD_TO_CART:
            if(state.length > 0){
                for(i = 0 ; i < state.length ; i ++){
                    if(state[i].product.id === product.id){
                        index = i
                        break
                    }
                }     
                if(index !== -1 ){
                    if(state[index].quantity > 0){
                        state[index].quantity += quantity
                    }
                    else{
                        state.push({
                            product,
                            quantity
                        })
                    }
                }else{
                    state.push({
                        product,
                        quantity
                    })
                }
                
            }
            else{
                state.push({
                    product,
                    quantity
                })
    
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state] 
        case types.DEL_TO_CART : 
            for(i = 0 ; i < state.length ; i ++){
                if(state[i].product.id === products.id){
                    index = i
                    break
                }
            }   
            state.splice(index,1)
            localStorage.setItem('CART',JSON.stringify(state))
        return [...state]
        case types.UPDATE_QUANTITY : 
            if(state.length > 0){
                    for(i = 0 ; i < state.length ; i ++){
                        if(state[i].product.id === product.id){
                            index = i
                            break
                        }
                    }
                    if(state[index].quantity >= 1){
                        if(product.inventory > 0) {
                            state[index].quantity += quantity
                        }
                    }
                    else{
                        state.splice(index,1)
                    }
               return [...state] 
            }
            localStorage.setItem('CART',JSON.stringify(state))  
        return [...state]
        //Return default
        default : return [...state]
    }
}
 
export default cart;