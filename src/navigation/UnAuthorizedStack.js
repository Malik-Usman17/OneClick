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
import HomeCleaning from '../screen/HomeCleaning';
import EventsWedding from '../screen/EventsWedding';
import HealthFitness from '../screen/HealthFitness';
import BeautyServices from '../screen/BeautyServices';
import VehicleServices from '../screen/VehicleServices';

const {Screen, Navigator} = createStackNavigator();

function UnAuthorizedStack() {
  return (
    <Navigator initialRouteName={Constants.screen.Intro}>
      <Screen
        name={Constants.screen.Login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={Constants.screen.SignUpScreen}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={Constants.screen.Intro}
        component={Intro}
        options={{headerShown: false}}
      />
      <Screen
        name={Constants.screen.TabNavigation}
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}

export default UnAuthorizedStack;
