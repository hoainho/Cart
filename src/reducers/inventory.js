import * as types from '../constant/Actions';
var initialState = [
    {
        id : 1,
        name : 'Champion',
        image: 'https://www.frankssports.com/Assets/ProductImages/Champion_Life_Men_Reverse_ld_English_Lettering_GF68_GF68_Silver_Gray.png',
        description : 'Adidas 3 sọc',
        price : 250,
        inventory : 10,
        rating : 4,
        slug : 'champion'
    },
    {
        id : 2,
        name : 'Reebok',
        image: 'https://www.slamjam.com/dw/image/v2/BDHR_PRD/on/demandware.static/-/Sites-catalog-slamjam-master/default/dw5e64cf47/hi-res/1G30115005_S20-NAVY_01.png?sw=400&sh=500',
        description : 'EverLast Tím',
        price : 180,
        inventory : 15,
        rating : 5,
        slug : 'reebok'
    },
    {
        id : 3,
        name : 'Nike',
        image: 'https://i.pinimg.com/originals/e6/b1/b4/e6b1b4cd15edbc79e49c5c3dbc9d917d.png',
        description : 'Sanfrancisco xanh lá',
        price : 200,
        inventory : 5,
        rating : 3,
        slug : 'nike'
    }
]
var products = (state = initialState , action) => {
    localStorage.setItem('PRODUCT',JSON.stringify(state))
    switch(action.type){
        case types.ADD_TO_CART :
            var index = null;
            for( var i = 0; i < state.length ; i++){
                if(state[i].id === action.product.id){
                    index = i
                    break
                }
            }
            if(state[index].inventory > 0) {
                state[index].inventory -= 1
            }else{
                state[index].inventory = 0 
            }  
            localStorage.setItem('PRODUCT',JSON.stringify(state))
        return [...state]
        case types.UPDATE_QUANTITY : 
            for( i = 0; i < state.length ; i++){
                if(state[i].id === action.product.id){
                    index = i
                    break
                }
            }
            if(state[index].inventory > 0) {
                state[index].inventory -= action.quantity
            }else{
                state[index].inventory = 0 
            }
            localStorage.setItem('PRODUCT',JSON.stringify(state))
            return [...state]
        default : return [...state]
    }
}
export default products;