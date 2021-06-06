import {CURRENT_USER} from '../actions/types';

const initialState = {
    currentUser: null
}


export const currentUser = (state = initialState, action) => {
    switch(action.type){
        case CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }
        
        default:
            return state;
    }

}