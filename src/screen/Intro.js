import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../component/Button';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';

const Intro = ({navigation}) => {
  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={true}
    >
    
    <View style={{marginTop:12, marginLeft: 6}}> 
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{...styles.headingText, color: 'black'}}>OneClick</Text>
        <Text style={{...styles.headingText, color: colors.colorPrimary}}>
          Services
        </Text>
      </View>

      <View style={styles.imageView}>
        <Image
          source={require('../../assets/SplashTester.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.userSectionView}>
        <Text style={styles.labelText}>Sign in with existing account</Text>

        <Button 
          title="Sign In"
          style={styles.button}
          buttonTextStyle={{fontSize: 18}}
          onPress={() => navigation.push(Constants.screen.Login)}
        />

        <Text style={{...styles.labelText, marginTop: 25}}>Sign up As</Text>

        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10 }}>

          <Button
            title="Customer"
            style={styles.signUpButton}
            buttonTextStyle={{ fontSize: 18 }}
            onPress={() => navigation.push(Constants.screen.SignUpScreen, { type: 'user' })}
          />

          <Button
            title="Service Provider"
            style={styles.signUpButton}
            buttonTextStyle={{ fontSize: 18 }}
            onPress={() => navigation.push(Constants.screen.SignUpScreen, { type: 'provider' })}
          />

        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height * 0.42,
    resizeMode: 'contain',
  },
  mottoView: {
    alignItems: 'center',
  },
  motto: {
    fontSize: 15,
    fontWeight: '600',
  },
  button: {
    height: Dimensions.get('window').height * 0.055,
    width: Dimensions.get('window').width * 0.45,
    borderRadius: 7,
    elevation: 1,
    marginTop: 12
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  labelText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userSectionView: {
    margin: 15,
    borderRadius: 7,
    alignItems: 'center'
  },
  signUpButton:{
    height: Dimensions.get('window').height * 0.055,
    width: Dimensions.get('window').width * 0.42,
    borderRadius: 7,
    elevation: 1,
  }
});

export default Intro;
