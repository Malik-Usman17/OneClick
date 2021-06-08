import { CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import LogoutButton from '../component/LogoutButton';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';
import { currentUserAction } from '../redux/actions/currentUserAction';
import ChooseServices from '../screen/ChooseServices';
import CurrentTask from '../screen/CurrentTask';
import LeadRequirement from '../screen/LeadRequirement';
import Leads from '../screen/Leads';
import Quotes from '../screen/Quotes';
import ServiceProviderLocation from '../screen/ServiceProviderLocation';
import SPProfile from '../screen/SPProfile';

const { Screen, Navigator } = createStackNavigator();

const ServiceProviderStack = ({navigation}) => {
    const dispatch = useDispatch();
    
    return (
        <Navigator initialRouteName={Constants.screen.SPProfile}>

            <Screen
                name={Constants.screen.SPProfile}
                component={SPProfile}
                options={{
                    title: 'Home',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            />

            <Screen
                name={Constants.screen.ChooseServices}
                component={ChooseServices}
                options={{
                    title: 'Choose My Services',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            />

            <Screen
                name={Constants.screen.ServiceProviderLocation}
                component={ServiceProviderLocation}
                options={{
                    title: 'My Service Location',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            />

            <Screen
                name={Constants.screen.Leads}
                component={Leads}
                options={{
                    title: 'New Leads',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            />

            <Screen
                name={Constants.screen.LeadRequirement}
                component={LeadRequirement}
                options={{
                    title: 'User Name',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            />

            <Screen
                name={Constants.screen.Quotes}
                component={Quotes}
                options={{
                    title: 'User Name',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            />

            {/* <Screen
                name={Constants.screen.CurrentTask}
                component={CurrentTask}
                options={{
                    title: 'Current Tasks',
                    headerRight: () => <LogoutButton onPress={() => {
                        dispatch(currentUserAction(null));
                        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
                    }}/>,
                    headerStyle: { backgroundColor: colors.colorPrimary },
                    headerTintColor: colors.white
                }}
            /> */}

        </Navigator>
    )
}

export default ServiceProviderStack;