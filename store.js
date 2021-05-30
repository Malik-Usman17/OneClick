import {createStore, combineReducers} from 'redux';
import {SignUpReducer} from './src/redux/reducers/SignupReducer';


const reducers = combineReducers({
    SignUpReducer
});

export default createStore(reducers);