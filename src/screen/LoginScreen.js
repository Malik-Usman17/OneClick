import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {colors} from '../Constants/colors';
import Eyeicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/Fontisto';
import Button from '../component/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextField from '../component/TextField';
import Constants from '../Constants/constants.json';
import {useDispatch, useSelector} from 'react-redux';

const LoginScreen = ({navigation}) => {

  const userDetails = useSelector((state) => state.SignUpReducer);
  console.log(userDetails);
  const [passwordHidden, hidePassword] = useState(false);
  const [password, setPassword] = useState('');
  
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
              fieldTitle='Email Address'
              label='Email Address'
              iconName='user-o'
            />

            <TextField 
              fieldTitle='Password'
              label='Password'
              iconName='lock'
            />

          </View>

          <View style={styles.buttonView}>

            <Button 
              title='Login'
              style={styles.button}
              iconName='login-variant'
              iconStyle={{marginLeft: 7}}
              onPress={() => navigation.push(Constants.screen.TabNavigation)}
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