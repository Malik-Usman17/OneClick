import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import Constants from '../Constants/constants.json';
import SignUpScreen from '../screen/SignUpScreen';
import Intro from '../screen/Intro';
import Dashboard from '../screen/Dashboard';
import TabNavigation from '../screen/TabNavigation'
import AppliancesRepair from '../screen/AppliancesRepair';

const { Screen, Navigator } = createStackNavigator();

function UnAuthorizedStack() {

    return (
        <Navigator  initialRouteName={Constants.screen.Intro}>
          <Screen name={Constants.screen.Login} component={LoginScreen} options={{ headerShown: false}} />
          <Screen name={Constants.screen.SignUpScreen} component={SignUpScreen} options={{ headerShown: false}}/>
          <Screen name={Constants.screen.Intro} component={Intro} options={{ headerShown: false}}/>
          <Screen name={Constants.screen.TabNavigation} component={TabNavigation} options={{ headerShown: false}}/>
          <Screen name={Constants.screen.AppliancesRepair} component={AppliancesRepair} options={{ headerShown: false}}/>
        </Navigator>
    )
}

export default UnAuthorizedStack;

