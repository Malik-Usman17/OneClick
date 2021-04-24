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
      <Image source={require('../../assets/testing.png')} style={styles.logo} />

      <View style={{alignItems: 'center'}}>
        <Text style={{...styles.headingText, color: 'black'}}>OneClick</Text>
        <Text style={{...styles.headingText, color: colors.colorPrimary}}>
          Services
        </Text>
      </View>

      <View style={styles.imageView}>
        <Image
          source={require('../../assets/Splashscr.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.mottoView}>
        <Text style={styles.motto}>Pakistan's no.01 on Demand</Text>
        <Text style={styles.motto}>Service at you door step</Text>
      </View>

      <View style={styles.userSectionView}>
        <Text style={styles.labelText}>Sign in with existing account</Text>

        <View style={styles.buttonsView}>
          <Button
            title="Sign In"
            style={styles.button}
            buttonTextStyle={{fontSize: 18}}
            onPress={() => navigation.push(Constants.screen.Login)}
          />
        </View>

        <View style={{height: 25}} />

        <Text style={styles.labelText}>Sign up As</Text>

        <View style={styles.buttonsView}>
          <Button
            title="Customer"
            style={{...styles.button, backgroundColor: colors.white}}
            buttonTextStyle={{color: 'black', fontSize: 18}}
            onPress={() => navigation.push(Constants.screen.SignUpScreen)}
          />

          <Button
            title="Service Provider"
            style={styles.button}
            buttonTextStyle={{fontSize: 18}}
            onPress={() => navigation.push(Constants.screen.SignUpScreen)}
          />
        </View>
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
    marginTop: 20,
    backgroundColor: 'green',
    width: 130,
    height: 150,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  imageView: {
    // backgroundColor: colors.primaryBg,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 0.4
  },
  image: {
    // flex: 1,
    width: '100%',
    // width: Dimensions.get('screen').width * 0.95,
    height: Dimensions.get('screen').height * 0.48,
    resizeMode: 'contain',
    //tintColor: 'green'
    backgroundColor: 'pink',
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
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 7,
    elevation: 1,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 15,
    // backgroundColor: 'green',
    padding: 10,
  },
  labelText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userSectionView: {
    backgroundColor: '#f2f2f2',
    margin: 15,
    borderRadius: 7,
    paddingVertical: 10,
  },
});

export default Intro;
