import * as Message from '../constant/Message';
import * as types from '../constant/Actions';
var initialState = Message.MESS_WELCOMES
const message = ( state = initialState , actions ) =>{
    switch(actions.type){
        case types.CHANGE_MESSAGE :
            return actions.message
        default : return state
    }
}
export default message;
