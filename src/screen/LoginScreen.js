import React, {useState} from 'react';
import {Alert, View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {colors} from '../Constants/colors';
import Eyeicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/Fontisto';
import Button from '../component/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextField from '../component/TextField';
import Constants from '../Constants/constants.json';
import {useDispatch, useSelector} from 'react-redux';
import {currentUserAction} from '../redux/actions/currentUserAction';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.SignUpReducer.users);
  console.log(allUsers);

  const [passwordHidden, hidePassword] = useState(false);
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
        navigation.push(Constants.screen.TabNavigation);
      }
      else{
        navigation.push(Constants.screen.SPProfile);
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
    <View style={{flex: 1}}>

      <ImageBackground
        style={{flex: 1, resizeMode: 'contain'}}
        source={require('../../assets/login.png')}
      >

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
            />

            <TextField 
              fieldTitle='Password'
              label='Password'
              iconName='lock'
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
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    //backgroundColor: 'green',
    //alignItems: 'center',
    marginTop: 20
  },
  headingText:{
    paddingLeft: 55,
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white
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
    //marginHorizontal: 10
    //justifyContent: 'space-evenly'
  },
  buttonView:{
    marginTop: 25,
    alignItems: 'center',
    //padding: 5
    //flexDirection: 'row'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
//   scroll:{
//     backgroundColor: 'pink',
//     padding: 12,
//     flex: 1
//   },
//   loginView:{
//     //backgroundColor: 'green',
//     marginTop: 150,
//     marginLeft: 6
//   },
//   loginText:{
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: colors.white
//   },
//   paasFieldView:{
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     justifyContent: 'center', 
//     marginTop: 5
// },
// inputFieldStyle:{
//   //backgroundColor: 'blue',
//   width: Dimensions.get('window').width * 0.85,
//   height: Dimensions.get('window').height * 0.07,
//   //borderWidth: 1.5,
//   borderColor: 'gray',
//   //borderRadius: 20,
//   paddingLeft: 15,
// },
// titleStyle:{
//   paddingLeft: 13,
//   fontWeight: 'bold',
//   fontSize: 15,
//   color: 'black'
// },
// passIconView: {
//   position: 'absolute', 
//   right: 15, 
//   bottom: 11 
// },
// text:{
//   color: colors.gray,
//   fontWeight: 'bold',
//   fontSize: 15,
//   marginTop: 15
// },
// line:{
//   height: Dimensions.get('window').height * 0.002,
//   backgroundColor: colors.white,
//   marginTop: 7
// },
// shortLine:{
//   height: Dimensions.get('window').height * 0.002,
//   width: Dimensions.get('window').width * 0.3,
//   backgroundColor: 'blue',
// },
// lock:{
//   position: 'absolute',
//   left: 10,
//   bottom: 12 
// },
// emailView:{
//   flexDirection: 'row',
//   marginTop: 50,
//   paddingLeft: 12,
//   justifyContent: 'center',
//   alignItems: 'center'
// },
// PasswordView:{
//   flexDirection: 'row',
//   marginTop: 20,
//   paddingLeft: 12,
//   alignItems: 'center'
// },
// PasswordField:{
//   width: Dimensions.get('window').width * 0.75,
//   height: Dimensions.get('window').height * 0.07,
//   borderColor: 'gray',
//   paddingLeft: 15,
// },

// signUpView:{
//   marginTop: 20,
//   flexDirection: 'row',
//   // backgroundColor: 'green',
//   justifyContent: 'center',
//   alignItems: 'center'
// },
// or:{
//   marginRight: 15, 
//   marginLeft: 15,
//   color: colors.white,
//   fontWeight: 'bold'
// }
});

export default LoginScreen;