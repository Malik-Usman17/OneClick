import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';
import CurrentTask from '../screen/CurrentTask';
import Leads from '../screen/Leads';
import ServiceProviderStack from './ServiceProviderStack';
import SPNotification from '../screen/SPNotification';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ServiceProviderTab = () => {
  
//   const currentUser = useSelector((state) => state.currentUser.currentUser);
//   console.log('Tab Navigation (type):',currentUser);

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={Constants.screen.ServiceProviderStack}
      tabBarOptions={{
        activeTintColor: colors.secondaryColor,
        inactiveTintColor: colors.colorPrimary,
        labelStyle: {fontSize: 11, fontWeight: 'bold', color: 'black'},
      }}
    >
      <Tab.Screen
        name={Constants.screen.CurrentTask}
        component={CurrentTask}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={Constants.screen.ServiceProviderStack}
        component={ServiceProviderStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={Constants.screen.SPNotification}
        component={SPNotification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => (
            <Ionicons name="notifications-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={Constants.screen.Leads}
        component={Leads}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="tasks" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};


export default ServiceProviderTab;
