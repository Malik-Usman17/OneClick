import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import Constants from '../Constants/constants.json';
import Intro from '../screen/Intro';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import SplashScreen from '../screen/SplashScreen';
import AppNavigationStack from './AppNavigationStack';
import ServiceProviderStack from './ServiceProviderStack';
import ServiceProviderTab from './ServiceProviderTab';
import TabNavigation from './TabNavigation';


const {Screen, Navigator} = createStackNavigator();

function UnAuthorizedStack({navigation}) {
  
  const dispatch = useDispatch();

  return (
    <Navigator initialRouteName={Constants.screen.SplashScreen}>
      
      <Screen name={Constants.screen.SplashScreen} component={SplashScreen} options={{headerShown: false}} />
      <Screen name={Constants.screen.Login} component={LoginScreen} options={{headerShown: false}} />
      <Screen name={Constants.screen.SignUpScreen} component={SignUpScreen} options={{headerShown: false}} />
      <Screen name={Constants.screen.Intro} component={Intro} options={{headerShown: false}} />
      <Screen name={Constants.screen.TabNavigation} component={TabNavigation} options={{headerShown: false}}/>
      <Screen name={Constants.screen.AppNavigationStack} component={AppNavigationStack} options={{headerShown: false}}/>
      <Screen name={Constants.screen.ServiceProviderStack} component={ServiceProviderStack} options={{headerShown: false}} />
      <Screen name={Constants.screen.ServiceProviderTab} component={ServiceProviderTab} options={{headerShown: false}} />
      
    </Navigator>
  );
}

export default UnAuthorizedStack;
