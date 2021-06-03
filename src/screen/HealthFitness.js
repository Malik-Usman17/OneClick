import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';
import {useTheme} from '@react-navigation/native';




const HealthFitness = () =>{

  const [search, setSearch] = useState('');

  const {colours} = useTheme();

  const services = [
    {service: 'Emergencing Treatment', image: require('../../assets/Emergency.png')},
    {service: 'Drip', image: require('../../assets/Drip.jpg')},
    {service: 'Exercise Plan', image: require('../../assets/ExercisePlan.jpg')},
    {service: 'Basic Medicine', image: require('../../assets/Medicine.png')},
    {service: 'Blood Pressure And Sugar Test', image: require('../../assets/BloodPressure.jpg')},
    {service: 'Blood Test', image: require('../../assets/bloodTest.jpg')},
    {service: 'Injection', image: require('../../assets/injection.jpg')}
  ]


  var health = services;

  if(search != ''){
    health = services.filter((val) => val.service.toLowerCase().includes(search.toLowerCase()))
  }
  

  const serviceList = ({item}) => {

    return(
      <View>
        
        <CategoryCard
          imageSource={item.image}
          title={item.service}
          onPress={() => navigation.push(Constants.screen.UserServiceRequest)}
        />
        
      </View>
    )
  }

  return(
    <View style={styles.container}>
      
      <SearchField 
        label='Search Services'
        value={search}
        onChangeText={setSearch}
      />

      <View style={{ marginTop: 10, marginBottom: 50 }}>

        <FlatList
          data={health}
          renderItem={serviceList}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

      {/* <ScrollView
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

      </ScrollView> */}
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