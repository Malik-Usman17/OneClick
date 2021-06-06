import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import Constants from '../Constants/constants.json';
import SignUpScreen from '../screen/SignUpScreen';
import Intro from '../screen/Intro';
import Dashboard from '../screen/Dashboard';
import TabNavigation from './TabNavigation';
import SplashScreen from '../screen/SplashScreen';
import SPProfile from '../screen/SPProfile';
import LogoutButton from '../component/LogoutButton';
import {colors} from '../Constants/colors';
import ChooseServices from '../screen/ChooseServices';
import Leads from '../screen/Leads';
import LeadRequirement from '../screen/LeadRequirement';
import Quotes from '../screen/Quotes';
import CurrentTask from '../screen/CurrentTask';
import ServiceProviderLocation from '../screen/ServiceProviderLocation';
import AppNavigationStack from './AppNavigationStack';
import {useDispatch, useSelector} from 'react-redux';
import { CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {currentUserAction} from '../redux/actions/currentUserAction';
import ServiceProviderStack from './ServiceProviderStack';
import ServiceProviderTab from './ServiceProviderTab';


const {Screen, Navigator} = createStackNavigator();

function UnAuthorizedStack({navigation}) {
  const dispatch = useDispatch();
  //const nav  = useNavigation();
  //console.log('Nav:',nav)
  return (
    <Navigator initialRouteName={Constants.screen.SplashScreen}>
      <Screen 
        name={Constants.screen.SplashScreen} 
        component={SplashScreen} 
        options={{headerShown: false}} 
      />
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

      <Screen 
        name={Constants.screen.AppNavigationStack} 
        component={AppNavigationStack} 
        options={{headerShown: false}}
      />

      <Screen name={Constants.screen.ServiceProviderStack} component={ServiceProviderStack} options={{headerShown: false}} />
      <Screen name={Constants.screen.ServiceProviderTab} component={ServiceProviderTab} options={{headerShown: false}} />

      {/* <Screen 
        name={Constants.screen.SPProfile} 
        component={SPProfile} 
        options={{
          title: 'Profile', 
          headerRight: () => <LogoutButton onPress={() => {
            //dispatch(currentUserAction(null));
            console.log('Navigation:',navigation)
            //navigation.push(Constants.screen.Intro)
            //navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
          }}/>,  
          headerStyle: {backgroundColor: colors.colorPrimary}}}
      />
      
      <Screen 
        name={Constants.screen.ChooseServices} 
        component={ChooseServices} 
        options={{title: 'Choose My Services', headerRight: () => <LogoutButton />,  headerStyle: {backgroundColor: colors.colorPrimary}}}
      />

      <Screen 
        name={Constants.screen.Leads} 
        component={Leads} 
        options={{title: 'New Leads', headerRight: () => <LogoutButton />,  headerStyle: {backgroundColor: colors.colorPrimary}}}
      />
      <Screen 
        name={Constants.screen.LeadRequirement} 
        component={LeadRequirement} 
        options={{title: 'User Name', headerRight: () => <LogoutButton />,  headerStyle: {backgroundColor: colors.colorPrimary}}}
      />
      <Screen 
        name={Constants.screen.Quotes} 
        component={Quotes} 
        options={{title: 'User Name', headerRight: () => <LogoutButton />,  headerStyle: {backgroundColor: colors.colorPrimary}}}
      />
      <Screen 
        name={Constants.screen.CurrentTask} 
        component={CurrentTask} 
        options={{title: 'Current Tasks', headerRight: () => <LogoutButton />,  headerStyle: {backgroundColor: colors.colorPrimary}}}
      />
      <Screen 
        name={Constants.screen.ServiceProviderLocation} 
        component={ServiceProviderLocation} 
        options={{title: 'My Service Location', headerTintColor: colors.white, headerRight: () => <LogoutButton />,  headerStyle: {backgroundColor: colors.colorPrimary}}} 
      /> */}
      
    </Navigator>
  );
}

export default UnAuthorizedStack;
