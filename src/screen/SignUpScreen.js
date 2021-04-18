import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {colors} from '../Constants/colors';
import Button from '../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextField from '../component/TextField';
import Constants from '../Constants/constants.json';
import PickerSelector from '../component/Picker';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/loginBg.png')}
        style={styles.bgImage}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>OneClick</Text>
          <Text style={styles.headingText}>Services</Text>
        </View>
        <Text style={[styles.headingText, {marginLeft: 75}]}>Sign Up</Text>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <View style={styles.infoInnerContainer}>
            <TextField
              fieldTitle="Username"
              iconName="user-o"
              label="Username"
            />

            <TextField
              fieldTitle="Email Address"
              iconName="id-card"
              label="Email Address"
            />

            <TextField fieldTitle="Password" iconName="lock" label="Password" />

            <TextField
              fieldTitle="Phone Number"
              iconName="mobile-phone"
              label="Phone Number"
            />

            <View>
              <PickerSelector
                fieldTitle="Service"
                items={[
                  {name: 'Salon', value: 'salon'},
                  {name: 'Electrician', value: 'electrician'},
                  {name: 'Plumber', value: 'plumber'},
                  {name: 'Hairdresser', value: 'hairdresser'},
                ]}
              />
            </View>
          </View>

          <View style={styles.buttonView}>
            <Button
              title="Sign Up"
              style={styles.button}
              iconName="login-variant"
              iconStyle={{marginLeft: 7}}
              onPress={() => navigation.push(Constants.screen.TabNavigation)}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  heading: {
    // backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 120,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
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
    //padding: 5
    //flexDirection: 'row'
  },
  button: {
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width - 270,
    borderRadius: 22,
    flexDirection: 'row',
    //marginHorizontal: 10
    //justifyContent: 'space-evenly'
  },
});

export default SignUpScreen;
