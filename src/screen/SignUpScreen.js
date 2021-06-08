import React, {useState} from 'react';
import {
  View, Image,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';
import {colors} from '../Constants/colors';
import Button from '../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextField from '../component/TextField';
import Constants from '../Constants/constants.json';
import PickerSelector from '../component/Picker';
import {useDispatch, useSelector} from 'react-redux';
import {signUpAction} from '../redux/actions/signUpAction';

const SignUpScreen = ({navigation, route}) => {
  const usersSigned = useSelector((state) => state.SignUpReducer.users)

  const {type} = route.params;
  console.log('Value:',type)

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  function userSignUp() {
      const userInfo = {
        Name: userName, 
        password: password, 
        phone: phone,
        type: type,
        userId: usersSigned.length
      }
      dispatch(signUpAction(userInfo));
      navigation.push(Constants.screen.Login);
  } 

  return (
    // <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/loginBg.png')}
        style={styles.bgImage}>
          <ScrollView>
        
        <View style={styles.heading}>
          <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        </View>

        <Text style={[styles.headingText, {marginLeft: 60}]}>Sign Up</Text>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
          
          <View style={styles.infoInnerContainer}>
            
            <TextField
              fieldTitle="Username"
              iconName="user-o"
              label="Username"
              value={userName}
              onChangeText={(val) => setUserName(val)}
            />

            <TextField 
              fieldTitle="Password" 
              iconName="lock" 
              label="Password" 
              value={password}
              onChangeText={(val) => setPassword(val)}
            />

            <TextField
              keyboardType='phone-pad'
              fieldTitle="Phone Number"
              iconName="mobile-phone"
              label="Phone Number"
              value={phone}
              onChangeText={(val) => setPhone(val)}
            />

          </View>

          <View style={styles.buttonView}>
            <Button
              title="Sign Up"
              style={styles.button}
              iconName="login-variant"
              iconStyle={{marginLeft: 7}}
              onPress={() => {
                if(userName != '' && password != '' && phone != ''){
                  userSignUp();
                  setUserName('');
                setPassword('');
                setPhone('');
                }
                else{
                  Alert.alert(
                    "Fields Empty",
                    "Please fill out all the fields",
                    [
                      {text: 'Close'}
                    ]
                  );
                  //alert('Please Fill Out All The Fields');
                }
                
                
              }}
            />
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 5
  },
  bgImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  heading: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.colorPrimary,
  },
  infoInnerContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: '70%',
    padding: 6,
    paddingBottom: 20,
  },
  buttonView: {
    marginTop: 25,
    alignItems: 'center',
  },
  button: {
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.35,
    borderRadius: 22,
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SignUpScreen;
