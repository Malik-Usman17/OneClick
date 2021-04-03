import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';
import Eyeicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/Fontisto';
import Button from '../component/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const [passwordHidden, hidePassword] = useState(false);
  const [password, setPassword] = useState('');
  
  return(
    <ScrollView style={styles.scroll}>

      <View style={styles.loginView}>
        <Text style={styles.loginText}>Login In</Text>
      </View>

      <View style={styles.emailView}>

        <Icon
          name='user-o' 
          color={colors.white}
          size={30}
        />

        <TextInput 
          style={styles.inputFieldStyle}
          placeholder='Email Address'
          placeholderTextColor={colors.white}
        />

      </View>

      <View style={styles.line}/>

      <View style={styles.PasswordView}>

        <Lock
          name='locked' 
          color={colors.white}
          size={30}
        />

        <TextInput 
          style={styles.PasswordField}
          placeholder='Password'
          placeholderTextColor={colors.white}
          secureTextEntry={!passwordHidden}
        />

        <Eyeicon
          name={passwordHidden ? "eye" : "eye-off"}
          size={25}
          color={colors.white}
          onPress={() => hidePassword(!passwordHidden)}
       />

      </View>
      <View style={styles.line}/>

     <View style={styles.buttonView}>
      <Button 
        title='Login'
        style={styles.button}
        iconName='login-variant'
        iconStyle={{marginLeft: 7}}
      />
      </View>

      <View style={styles.signUpView}>

        <View style={styles.shortLine}/>

        <Text style={styles.or}>OR</Text>

        <View style={styles.shortLine}/>

      </View>
       
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: 'pink',
    padding: 12,
    flex: 1
  },
  loginView:{
    //backgroundColor: 'green',
    marginTop: 150,
    marginLeft: 6
  },
  loginText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white
  },
  paasFieldView:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 5
},
inputFieldStyle:{
  //backgroundColor: 'blue',
  width: Dimensions.get('window').width * 0.85,
  height: Dimensions.get('window').height * 0.07,
  //borderWidth: 1.5,
  borderColor: 'gray',
  //borderRadius: 20,
  paddingLeft: 15,
},
titleStyle:{
  paddingLeft: 13,
  fontWeight: 'bold',
  fontSize: 15,
  color: 'black'
},
passIconView: {
  position: 'absolute', 
  right: 15, 
  bottom: 11 
},
text:{
  color: colors.gray,
  fontWeight: 'bold',
  fontSize: 15,
  marginTop: 15
},
line:{
  height: Dimensions.get('window').height * 0.002,
  backgroundColor: colors.white,
  marginTop: 7
},
shortLine:{
  height: Dimensions.get('window').height * 0.002,
  width: Dimensions.get('window').width * 0.3,
  backgroundColor: 'blue',
},
lock:{
  position: 'absolute',
  left: 10,
  bottom: 12 
},
emailView:{
  flexDirection: 'row',
  marginTop: 50,
  paddingLeft: 12,
  justifyContent: 'center',
  alignItems: 'center'
},
PasswordView:{
  flexDirection: 'row',
  marginTop: 20,
  paddingLeft: 12,
  alignItems: 'center'
},
PasswordField:{
  width: Dimensions.get('window').width * 0.75,
  height: Dimensions.get('window').height * 0.07,
  borderColor: 'gray',
  paddingLeft: 15,
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
signUpView:{
  marginTop: 20,
  flexDirection: 'row',
  // backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center'
},
or:{
  marginRight: 15, 
  marginLeft: 15,
  color: colors.white,
  fontWeight: 'bold'
}
});

export default LoginScreen;