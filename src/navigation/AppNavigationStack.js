import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import Constants from '../Constants/constants.json';
import SignUpScreen from '../screen/SignUpScreen';
import Intro from '../screen/Intro';
import Dashboard from '../screen/Dashboard';
import TabNavigation from './TabNavigation';
import AppliancesRepair from '../screen/AppliancesRepair';

const {Screen, Navigator} = createStackNavigator();

function AppNavigationStack() {
  return (
    <Navigator initialRouteName={Constants.screen.Dashboard}>
      <Screen
        name={Constants.screen.Dashboard}
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Screen
        name={Constants.screen.AppliancesRepair}
        component={AppliancesRepair}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}

export default AppNavigationStack;
