import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../Constants/colors';
import Feather from 'react-native-vector-icons/Feather';

const Profile = () => {
  return(
    <View style={{backgroundColor: colors.primaryBg, flex: 1}}>
      <View style={styles.infoContainer}>
        <Image source={require('../../assets/User.png')} style={styles.image}/>
        
        <View style={{paddingLeft: 7}}>
          <Text style={styles.name}>User Name</Text>
          <Text>abc@mail.com</Text>
          <Text>+923112233445</Text>
        </View>

      </View>

      <View style={{padding: 20, marginTop: 20, backgroundColor: colors.white}}>
        <View style={styles.infoCategory}>
          <Feather name='book-open' size={30} color={'gray'}/>
          <Text style={styles.categoryTitle}>About</Text>
        </View>

        <View style={[styles.infoCategory, {marginTop: 40}]}>
          <Feather name='help-circle' size={30} color={'gray'}/>
          <Text style={styles.categoryTitle}>Help Center</Text>
        </View>

        <View style={[styles.infoCategory, {marginTop: 40}]}>
          <Feather name='edit' size={30} color={'gray'}/>
          <Text style={styles.categoryTitle}>Register as a Provider</Text>
        </View>


        <View style={[styles.infoCategory, , {marginTop: 40}]}>
          <Feather name='star' size={30} color={'gray'}/>
          <Text style={styles.categoryTitle}>Rate</Text>
        </View>

        <View style={[styles.infoCategory, {marginTop: 40}]}>
          <Feather name='lock' size={30} color={'gray'}/>
          <Text style={styles.categoryTitle}>Term and Privacy</Text>
        </View>

        
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
    borderColor: 'blue',
    borderWidth: 1
  },
  name:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoCategory:{
    flexDirection: 'row',
    //backgroundColor: 'green',
    // width: Dimensions.get('window').width * 0.54,
    //justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoryTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    //backgroundColor: 'blue',
    marginLeft: 80 
  }
})

export default Profile;