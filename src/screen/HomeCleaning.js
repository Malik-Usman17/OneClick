import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const HomeCleaning = () =>{
  return(
    <View style={styles.container}>
      
      <SearchField label='Search Services'/>

      <ScrollView style={styles.categoryContainer}>

        <CategoryCard 
          imageSource={require('../../assets/Dusting.jpg')}
          title='Dusting and Sweeping'
        />

        <CategoryCard 
          imageSource={require('../../assets/Vaccuming.png')}
          title='Vaccuming'
        />

        <CategoryCard 
          imageSource={require('../../assets/Mopping.png')}
          title='Mopping'
        />

        <CategoryCard 
          imageSource={require('../../assets/Fridge.jpg')}
          title='Frdige Cleaning'
        />

        <CategoryCard 
          imageSource={require('../../assets/Kitchen.jpg')}
          title='Kitchen Appliances'
        />

        <CategoryCard 
          imageSource={require('../../assets/Kitchen.jpg')}
          title='Blinds and Shutters'
        />

<CategoryCard 
          imageSource={require('../../assets/DeepCleaning.png')}
          title='Deep Cleaning'
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

export default HomeCleaning;