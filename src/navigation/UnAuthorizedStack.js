import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import Constants from '../Constants/constants.json';

const { Screen, Navigator } = createStackNavigator();

function UnAuthorizedStack() {

    return (
        <Navigator  initialRouteName={Constants.screen.Login}>
          <Screen name={Constants.screen.Login} component={LoginScreen} options={{ headerShown: false}} />
        </Navigator>
    )
}
export default UnAuthorizedStack;

