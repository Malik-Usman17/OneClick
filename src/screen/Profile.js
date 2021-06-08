import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../component/Header';
import { colors } from '../Constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import { currentUserAction } from '../redux/actions/currentUserAction';
import { CommonActions } from '@react-navigation/native';
import Constants from '../Constants/constants.json';


const Profile = ({navigation}) => {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  console.log('Profile Screen:',currentUser)

  return(
    
    <View style={{backgroundColor: colors.primaryBg, flex: 1}}>
      
      <Header title='Profile' onPress={() => {
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: Constants.screen.Intro}]}));
        dispatch(currentUserAction(null)); 
      }}
      />

      <View style={styles.infoContainer}>
        
        <Image source={require('../../assets/User.png')} style={styles.image}/>
        
        <View style={{paddingLeft: 7}}>
          <Text style={styles.name}>{currentUser?.Name}</Text>
          <Text>{currentUser?.phone}</Text>
        </View>

      </View>

      <View style={{padding: 20, marginTop: 20, backgroundColor: colors.white}}>
        
        <TouchableOpacity style={styles.infoCategory}>
          <Feather name='book-open' size={30} color={colors.secondaryColor}/>
          <Text style={styles.categoryTitle}>About</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.infoCategory, {marginTop: 40}]}>
          <Feather name='help-circle' size={30} color={colors.secondaryColor}/>
          <Text style={styles.categoryTitle}>Help Center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.infoCategory, {marginTop: 40}]}>
          <Feather name='edit' size={30} color={colors.secondaryColor}/>
          <Text style={styles.categoryTitle}>Register as a Provider</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[styles.infoCategory, , {marginTop: 40}]}>
          <Feather name='star' size={30} color={colors.secondaryColor}/>
          <Text style={styles.categoryTitle}>Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.infoCategory, {marginTop: 40}]}>
          <Feather name='lock' size={30} color={colors.secondaryColor}/>
          <Text style={styles.categoryTitle}>Term and Privacy</Text>
        </TouchableOpacity>

        
      </View>

      </View>
   
  );
}

const styles = StyleSheet.create({
  infoContainer:{
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  image:{
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: colors.secondaryColor,
    borderWidth: 1
  },
  name:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoCategory:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 80 
  }
});

export default Profile;