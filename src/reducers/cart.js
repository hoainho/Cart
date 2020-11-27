import * as types from '../constant/Actions';
import _ from 'lodash';
// var data = JSON.parse(localStorage.getItem('CART'))
var initialState = [
    {
        product : {
            id : 1,
        name : 'Champion',
        image: 'https://www.frankssports.com/Assets/ProductImages/Champion_Life_Men_Reverse_ld_English_Lettering_GF68_GF68_Silver_Gray.png',
        description : 'Adidas 3 sọc',
        price : 250,
        inventory : 10,
        rating : 4
        },
        quantity : 5
    },
    {
        product : {
            id : 2,
            name : 'Reebok',
            image: 'https://www.slamjam.com/dw/image/v2/BDHR_PRD/on/demandware.static/-/Sites-catalog-slamjam-master/default/dw5e64cf47/hi-res/1G30115005_S20-NAVY_01.png?sw=400&sh=500',
            description : 'EverLast Tím',
            price : 180,
            inventory : 15,
            rating : 5
        },
        quantity : 10
    }
]
var cart = (state = initialState , action) => {
    var { product , quantity } = action
    var index = -1
    switch(action.type){
        case types.ADD_TO_CART:
            if(state.length > 0){
                for( var i = 0 ; i < state.length ; i ++){
                    if(state[i].product.id === product.id){
                        index = i
                        break
                    }
                }     
            }
            if(index !== -1){
                state[index].quantity += quantity
            }
            else{
                state.push({
                    product,
                    quantity
                })
            
            }
        
            return [...state] 
        case types.DEL_TO_CART : 
        console.log(action);
            var { products } = action
            var index = null
            for( var i = 0 ; i < state.length ; i ++){
                if(state[i].product.id === products.id){
                    index = i
                    break
                }
            }   
            state.splice(index,1)
        return [...state]
        case types.UPDATE_QUANTITY : 
        var { product , quantity } = action
            if(state.length > 0){
                    for( var i = 0 ; i < state.length ; i ++){
                        if(state[i].product.id === product.id){
                            index = i
                            break
                        }
                    }
                    if(state[index].quantity > 1){
                        state[index].quantity += quantity
                    }
                    else{
                        state.splice(index,1)
                    }
                
            }
        return [...state] 
        //Return default
        default : return [...state]
    }
}
 
export default cart;