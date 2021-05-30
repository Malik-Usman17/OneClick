import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';
import {useTheme} from '@react-navigation/native';




const HealthFitness = () =>{

  const {colours} = useTheme();

  return(
    <View style={styles.container}>
      
      <SearchField label='Search Services'/>

      <ScrollView
        style={styles.categoryContainer} 
        //style={{marginTop: 15, backgroundColor: colours.card}}
      >

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
          imageSource={require('../../assets/BloodPressure.jpg')}
          title='Blood Pressure And Sugar Test'
        />

        <CategoryCard 
          imageSource={require('../../assets/bloodTest.jpg')}
          title='Blood Test'
        />

        <CategoryCard 
          imageSource={require('../../assets/injection.jpg')}
          title='Injection'
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
    //backgroundColor: colours.card
    backgroundColor: colors.white
  },
})

export default HealthFitness;