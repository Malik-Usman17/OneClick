import {USER_SIGNUP} from '../actions/types';

const initialState = {
    users: []
}


export const SignUpReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_SIGNUP:
            return {
                ...state, 
                users: [...state.users, action.payload]
            }
        
        default:
            return state;
    }

}