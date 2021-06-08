import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../component/Button';
import TextField from '../component/TextField';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';
import { currentUserAction } from '../redux/actions/currentUserAction';

const LoginScreen = ({navigation}) => {
  
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.SignUpReducer.users);
  console.log('All Users:',allUsers);

  
  const [password, setPassword] = useState('');
  const [user, SetUser] = useState('');

  function login() {
    const userInfo = {
      userName: user,
      password: password
    }
    const currentUser = allUsers.find(user => user.Name === userInfo.userName && user.password === userInfo.password)
    if(currentUser !== undefined){
      dispatch(currentUserAction(currentUser));
      if(currentUser.type == 'user'){
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.TabNavigation}]}));
        SetUser('');
        setPassword('');
      }
      else{
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.ServiceProviderTab}]}));
        SetUser('');
        setPassword('');
      }
    }
    else{
      Alert.alert(
        "Invalid Credentials",
        "User Not Found :(",
        [
          {text: 'Close'}
        ]
      );

    }
  }
  
  return(
      <ImageBackground
        style={{flex: 1, resizeMode: 'contain'}}
        source={require('../../assets/login.png')}
      >
        <ScrollView style={{flex: 1}}>

        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>

        

        <View style={styles.heading}>
          <Text style={styles.headingText}>Login</Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 12}}>

          <View style={styles.infoInnerContainer}>

            <TextField 
              fieldTitle='User Name'
              label='User Name'
              iconName='user-o'
              value={user}
              onChangeText={SetUser}
              autoCapitalize='none'
            />

            <TextField 
              fieldTitle='Password'
              label='Password'
              iconName='lock'
              autoCapitalize='none'
              value={password}
              onChangeText={setPassword}
            />

          </View>

          <View style={styles.buttonView}>

            <Button 
              title='Login'
              style={styles.button}
              iconName='login-variant'
              iconStyle={{marginLeft: 7}}
              onPress={() => {
                if(user != '' && password != ''){
                  login();
                }
                else{
                  Alert.alert(
                    "Fields Empty",
                    "Please fill out all the fields",
                    [
                      {text: 'Close'}
                    ]
                  );
                }
              }}
            />

          </View>

        </View>
        </ScrollView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  heading:{
    marginTop: 30
  },
  headingText:{
    paddingLeft: 55,
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.colorPrimary
  },
  infoInnerContainer:{
    backgroundColor: colors.white,
    borderRadius: 15,
    width: '70%',
    padding: 6,
    paddingBottom: 20
  },
  button:{
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width - 270,
    borderRadius: 22,
    flexDirection: 'row',
  },
  buttonView:{
    marginTop: 25,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default LoginScreen;