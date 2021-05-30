import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import LoginScreen from '../screen/LoginScreen';
import Constants from '../Constants/constants.json';
import SignUpScreen from '../screen/SignUpScreen';
import Intro from '../screen/Intro';
import Dashboard from '../screen/Dashboard';
import Feather from 'react-native-vector-icons/Feather';
import Share from '../screen/Share';
import Notification from '../screen/Notification';
import Profile from '../screen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../Constants/colors';
import AppliancesRepair from '../screen/AppliancesRepair';
import {Icon} from 'native-base';
import AppNavigationStack from './AppNavigationStack';
import LogoutButton from '../component/LogoutButton';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={Constants.screen.AppNavigationStack}
      tabBarOptions={{
        activeTintColor: colors.colorPrimary,
        inactiveTintColor: 'black',
        labelStyle: {fontSize: 11, fontWeight: 'bold', color: 'black'},
        //tabStyle: {backgroundColor: 'green', elevation: 40}
      }}
      // tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name={Constants.screen.AppNavigationStack}
        component={AppNavigationStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />

      {/* <Tab.screen 
        name={Constants.screen.AppliancesRepair}
        component={AppliancesRepair} 
        // options={{headerShown: false}}
      /> */}

      <Tab.Screen
        name={Constants.screen.Profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={26} />
          ),
          // title: 'Profile',
          // headerRight: () => <LogoutButton />
        }}
      />

      <Tab.Screen
        name={Constants.screen.Notification}
        component={Notification}
        options={{
          tabBarBadge: 5,
          tabBarBadgeStyle: {
            backgroundColor: colors.colorPrimary,
            color: colors.primaryBg,
            fontSize: 14,
          },
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => (
            <Ionicons name="notifications-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={Constants.screen.Share}
        component={Share}
        options={{
          tabBarLabel: 'Share',
          tabBarIcon: ({color}) => (
            <Feather name="share-2" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen 
        name={Constants.screen.AppliancesRepair} 
        component={AppliancesRepair}
      /> */}
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   tabBarContainerStyle: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: 'green',
//       paddingHorizontal: 10,
//   },
//   tabBarStyle: {
//       justifyContent: 'space-evenly',
//       alignItems: 'center',
//   }
// })

export default TabNavigation;
