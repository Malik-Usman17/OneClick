import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const HomeCleaning = () =>{

  const [search, setSearch] = useState('');

  const homeServices = [
    {service: 'Dusting and Sweeping', image: require('../../assets/Dusting.jpg')},
    {service: 'Vaccuming', image: require('../../assets/Vaccuming.png')},
    {service: 'Mopping', image: require('../../assets/Mopping.png')},
    {service: 'Frdige Cleaning', image: require('../../assets/Fridge.jpg')},
    {service: 'Kitchen Appliances', image: require('../../assets/Kitchen.jpg')},
    {service: 'Blinds and Shutters', image: require('../../assets/Blind.jpg')},
    {service: 'Deep Cleaning', image: require('../../assets/DeepCleaning.png')}
  ]

  
  var home = homeServices;

  if(search != ''){
    home = homeServices.filter((val) => val.service.toLowerCase().includes(search.toLowerCase()))
  }


  const services = ({item}) => {

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
          data={home}
          renderItem={services}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

      {/* <ScrollView style={styles.categoryContainer}>

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
          imageSource={require('../../assets/Blind.jpg')}
          title='Blinds and Shutters'
        />

<CategoryCard 
          imageSource={require('../../assets/DeepCleaning.png')}
          title='Deep Cleaning'
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
    backgroundColor: colors.white
  },
})

export default HomeCleaning;