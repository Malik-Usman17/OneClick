import { CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import LogoutButton from '../component/LogoutButton';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';
import { currentUserAction } from '../redux/actions/currentUserAction';
import AppliancesRepair from '../screen/AppliancesRepair';
import BeautyServices from '../screen/BeautyServices';
import Dashboard from '../screen/Dashboard';
import EventsWedding from '../screen/EventsWedding';
import HealthFitness from '../screen/HealthFitness';
import HomeCleaning from '../screen/HomeCleaning';
import UserServiceRequest from '../screen/UserServiceRequest';
import VehicleServices from '../screen/VehicleServices';

const {Screen, Navigator} = createStackNavigator();

function AppNavigationStack({navigation}) {

  const dispatch = useDispatch();

  return (
    <Navigator initialRouteName={Constants.screen.Dashboard}>
      <Screen 
         name={Constants.screen.Dashboard} 
         component={Dashboard} 
         options={{
           title: 'Home', 
           headerRight: () => <LogoutButton onPress={() => {
             dispatch(currentUserAction(null));
             navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}))
           }}/>,
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
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>, 
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.VehicleServices} 
        component={VehicleServices} 
        options={{
          title: 'Vehicle Services',
          headerTintColor: colors.white, 
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.HomeCleaning}
        component={HomeCleaning}
        options={{
          title: 'Cleaning Services',
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.EventsWedding} 
        component={EventsWedding} 
        options={{
          title: 'Events Services', 
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.HealthFitness} 
        component={HealthFitness} 
        options={{
          title: 'Health Services', 
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.colorPrimary}
        }}
      />

      <Screen 
        name={Constants.screen.BeautyServices} 
        component={BeautyServices} 
        options={{
          title: 'Beauty Services', 
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,
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
          headerRight: () => <LogoutButton onPress={() => {
            dispatch(currentUserAction(null));
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,  
          headerStyle: {backgroundColor: colors.colorPrimary}
        }} 
      />     

    </Navigator>
  );
}

export default AppNavigationStack;
