import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const BeautyServices = () =>{
  return(
    <View style={styles.container}>
      
      <SearchField label='Search Services'/>

      <ScrollView style={styles.categoryContainer}>

        <CategoryCard 
          imageSource={require('../../assets/Florist.jpg')}
          title='Massage'
        />

        <CategoryCard 
          imageSource={require('../../assets/Caterer.jpg')}
          title='MakeUp'
        />

        <CategoryCard 
          imageSource={require('../../assets/bridalDress.png')}
          title='Facial'
        />

        <CategoryCard 
          imageSource={require('../../assets/Lighting.jpg')}
          title='Waxing'
        />

        <CategoryCard 
          imageSource={require('../../assets/reception.jpg')}
          title='Nails'
        />

        <CategoryCard 
          imageSource={require('../../assets/venue.jpg')}
          title='Manicure Pedicure'
        />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primaryBg
  },
  categoryContainer:{
    marginTop: 15,
    backgroundColor: colors.white
  },
});

export default BeautyServices;