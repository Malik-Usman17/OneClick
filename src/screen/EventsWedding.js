import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const EventsWedding = () =>{
  return(
    <View style={styles.container}>
      
      <SearchField label='Search Services'/>

      <ScrollView style={styles.categoryContainer}>

        <CategoryCard 
          imageSource={require('../../assets/Florist.jpg')}
          title='Arranging The Florist'
        />

        <CategoryCard 
          imageSource={require('../../assets/Caterer.jpg')}
          title='Caterering'
        />

        <CategoryCard 
          imageSource={require('../../assets/bridalDress.png')}
          title='Bridal And Groom Dresses'
        />

        <CategoryCard 
          imageSource={require('../../assets/Lighting.jpg')}
          title='Lighting And Visuals'
        />

        <CategoryCard 
          imageSource={require('../../assets/reception.jpg')}
          title='Setting Up The Reception'
        />

        <CategoryCard 
          imageSource={require('../../assets/venue.jpg')}
          title='Select The Menu And Venue'
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
})

export default EventsWedding;