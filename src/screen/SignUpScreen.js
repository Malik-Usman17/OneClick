import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Dimensions} from 'react-native';
import {colors} from '../Constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextField from '../component/TextField';

const SignUpScreen = () => {
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/loginBg.png')}
        style={styles.bgImage}
      >
        <View style={styles.heading}>
          <Text style={styles.headingText}>OneClick</Text>
          <Text style={styles.headingText}>Services</Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <View style={styles.infoInnerContainer}>

          <TextField 
            fieldTitle='Username'
            iconName='user-o'
            label='Username'
          />

          <TextField 
            fieldTitle='Email Address'
            iconName='id-card'
            label='Email Address'
          />

        <TextField 
          fieldTitle='Password'
          iconName='lock'
          label='Password'
        />

        <TextField 
          fieldTitle='Phone Number'
          iconName='mobile-phone'
          label='Phone Number'
        />

        </View>
     
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  bgImage:{
    flex: 1,
    resizeMode: 'contain',
  },
  heading:{
    // backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 120
  },
  headingText:{
    fontSize: 25,
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
});

export default SignUpScreen;