import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';
import Constants from '../Constants/constants.json';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {


  return(
    <View style={styles.container}>
      
      <Text style={styles.heading}>OneClick</Text>

      <Text style={{...styles.heading, color: colors.colorPrimary}}>Services</Text>
      
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.mottoView}>
        <Text style={styles.motto}>Pakistan's no.01 on Demand</Text>
        <Text style={styles.motto}>Service at you door step</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryBg
  },
  logo:{
    height: Dimensions.get('window').height * 0.43,
    width: Dimensions.get('window').height * 0.5,
    resizeMode: 'contain',
  },
  heading:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  mottoView: {
    flex: 0.35,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  motto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.colorPrimary
  },
})

export default SplashScreen;