import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const HealthFitness = () =>{
  return(
    <View style={styles.container}>
      
      <SearchField label='Search Services'/>

      <ScrollView style={styles.categoryContainer}>

        <CategoryCard 
          imageSource={require('../../assets/Emergency.png')}
          title='Emergencing Treatment'
        />

        <CategoryCard 
          imageSource={require('../../assets/Drip.jpg')}
          title='Drip'
        />

        <CategoryCard 
          imageSource={require('../../assets/ExercisePlan.jpg')}
          title='Exercise Plan'
        />

        <CategoryCard 
          imageSource={require('../../assets/Medicine.png')}
          title='Basic Medicine'
        />

        <CategoryCard 
          imageSource={require('../../assets/reception.jpg')}
          title='Blood Pressure And Sugar Test'
        />

        <CategoryCard 
          imageSource={require('../../assets/venue.jpg')}
          title='Blood Test'
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

export default HealthFitness;