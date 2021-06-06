import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';

const SplashScreen = ({navigation}) => {

  const currentUser = useSelector((state) => state.currentUser.currentUser);
  console.log('Current:',currentUser)

  useEffect(() => {
    setTimeout(() => {
      if(currentUser != null){
        if(currentUser.type == 'user'){
          navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.TabNavigation}]}));
        }
        else{
          //navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.SPProfile}]}));
          navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.ServiceProviderTab}]}));
        }
      }
      else{
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
      }
    }, 1000)
}, []);


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