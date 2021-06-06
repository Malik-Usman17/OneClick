import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors} from '../Constants/colors';
import Button from '../component/Button';
import Constants from '../Constants/constants.json';

const Intro = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
    
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

        <Button 
          title="Customer"
          style={styles.button}
          buttonTextStyle={{fontSize: 18}}
          onPress={() => navigation.push(Constants.screen.SignUpScreen, {type: 'user'})}
        />

        <Button 
          title="Service Provider"
          style={styles.button}
          buttonTextStyle={{fontSize: 18}}
          onPress={() => navigation.push(Constants.screen.SignUpScreen , {type: 'provider'})}
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
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
    // backgroundColor: colors.primaryBg,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 0.4
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
    width: Dimensions.get('window').width * 0.5,
    borderRadius: 7,
    elevation: 1,
    marginTop: 12
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 15,
    // backgroundColor: 'green',
    padding: 10,
  },
  labelText: {
    //marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userSectionView: {
    //backgroundColor: '#f2f2f2',
    margin: 15,
    borderRadius: 7,
    //paddingVertical: 10,
    alignItems: 'center'
  },
});

export default Intro;
