import {USER_ORDER} from '../actions/types';

const initialState = {
    orders: []
}


export const userOrderReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_ORDER:
            return {
                ...state, 
                orders: [...state.orders, action.payload]
            }
        
        default:
            return state;
    }

}