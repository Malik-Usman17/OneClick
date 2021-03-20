import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';


const { Screen, Navigator } = createStackNavigator();

function UnAuthorizedStack() {

    return (
        <Navigator  initialRouteName='LoginScreen'>
          <Screen name={'LoginScreen'} component={LoginScreen} options={{ headerShown: false}} />
        </Navigator>
    )
}
export default UnAuthorizedStack;

