import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const VehicleServices = () =>{
  return(
    <View style={styles.container}>
      
      <SearchField label='Search Services'/>

      <ScrollView style={styles.categoryContainer}>

        <CategoryCard 
          imageSource={require('../../assets/Florist.jpg')}
          title='Engine Oil Change And Filter Replacement'
        />

        <CategoryCard 
          imageSource={require('../../assets/Caterer.jpg')}
          title='Checking Lights, Tyres'
        />

        <CategoryCard 
          imageSource={require('../../assets/bridalDress.png')}
          title='Checking Hydraulic Fluid And Coolant Levels'
        />

        <CategoryCard 
          imageSource={require('../../assets/Lighting.jpg')}
          title='Checking The Cooling System'
        />

        <CategoryCard 
          imageSource={require('../../assets/reception.jpg')}
          title='Engine Tuning'
        />

        <CategoryCard 
          imageSource={require('../../assets/venue.jpg')}
          title='Suspension Checks'
        />

        <CategoryCard 
          imageSource={require('../../assets/venue.jpg')}
          title='Car And Bike Wash'
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

export default VehicleServices;