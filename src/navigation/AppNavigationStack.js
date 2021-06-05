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
import LogoutButton from '../component/LogoutButton';
import VehicleServices from '../screen/VehicleServices';
import HomeCleaning from '../screen/HomeCleaning';
import EventsWedding from '../screen/EventsWedding';
import HealthFitness from '../screen/HealthFitness';
import BeautyServices from '../screen/BeautyServices';
import {colors} from '../Constants/colors';
import UserServiceRequest from '../screen/UserServiceRequest';

const {Screen, Navigator} = createStackNavigator();

function AppNavigationStack() {
  return (
    <Navigator initialRouteName={Constants.screen.Dashboard}>
      <Screen 
         name={Constants.screen.Dashboard} 
         component={Dashboard} 
         options={{
           title: 'Home', 
           headerRight: () => <LogoutButton />,
           headerStyle: {backgroundColor: colors.colorPrimary},
           headerTintColor: colors.white
          }} 
      />
      
      <Screen 
        name={Constants.screen.AppliancesRepair} 
        component={AppliancesRepair} 
        options={{
          title: 'Appliances Services', 
          headerTintColor: colors.white, 
          headerRight: () => <LogoutButton />, 
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.VehicleServices} 
        component={VehicleServices} 
        options={{
          title: 'Vehicle Services',
          headerTintColor: colors.white, 
          headerRight: () => <LogoutButton />,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.HomeCleaning}
        component={HomeCleaning}
        options={{
          title: 'Cleaning Services',
          headerRight: () => <LogoutButton />,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.EventsWedding} 
        component={EventsWedding} 
        options={{
          title: 'Events Services', 
          headerRight: () => <LogoutButton />,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.HealthFitness} 
        component={HealthFitness} 
        options={{
          title: 'Health Services', 
          headerRight: () => <LogoutButton />,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.BeautyServices} 
        component={BeautyServices} 
        options={{
          title: 'Beauty Services', 
          headerRight: () => <LogoutButton />,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.UserServiceRequest} 
        component={UserServiceRequest} 
        options={{
          title: 'My Service Request', 
          headerTintColor: colors.white, 
          headerRight: () => <LogoutButton />,  
          headerStyle: {backgroundColor: colors.colorPrimary}
        }} 
      />     

    </Navigator>
  );
}

export default AppNavigationStack;
