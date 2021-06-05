import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';

const EventsWedding = () =>{

  const [search, setSearch] = useState('');

  const services = [
    {service: 'Arranging The Florist', image: require('../../assets/Florist.jpg')},
    {service: 'Caterering', image: require('../../assets/Caterer.jpg')},
    {service: 'Bridal And Groom Dresses', image: require('../../assets/bridalDress.png')},
    {service: 'Lighting And Visuals', image: require('../../assets/Lighting.jpg')},
    {service: 'Setting Up The Reception', image: require('../../assets/reception.jpg')},
    {service: 'Select The Menu And Venue', image: require('../../assets/venue.jpg')},
  ]

  var events = services;

  if(search != ''){
    events = services.filter((val) => val.service.toLowerCase().includes(search.toLowerCase()))
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
          data={events}
          renderItem={serviceList}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
      
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