import {CLIENT_NOTIFICATION} from '../actions/types';

const initialState = {
    notice: []
}


export const userNotification = (state = initialState, action) => {
    switch(action.type){
        case CLIENT_NOTIFICATION:
            return {
                ...state, 
                notice: [...state.notice, action.payload]
            }
        
        default:
            return state;
    }

}