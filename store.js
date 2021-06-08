import {createStore, combineReducers} from 'redux';
import {SignUpReducer} from './src/redux/reducers/SignupReducer';
import {currentUser} from './src/redux/reducers/currentUser';
import {userOrderReducer} from './src/redux/reducers/userOrderReducer';
import {userNotification} from './src/redux/reducers/NotificationReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
 

const persistConfig = {
    key: 'root',
    storage: AsyncStorage   
}


const reducers = combineReducers({
    SignUpReducer,
    currentUser,
    userOrderReducer,
    userNotification,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxStore = () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor}
}

export default reduxStore;