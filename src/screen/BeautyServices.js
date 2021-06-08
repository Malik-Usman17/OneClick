import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { colors } from '../Constants/colors';
import SearchField from '../component/SearchField';
import CategoryCard from '../component/CategoryCard';
import Constants from '../Constants/constants.json';

const BeautyServices = ({navigation}) =>{

  const [search, setSearch] = useState('');

  const services = [
    {service: 'Massage', image: require('../../assets/massage.jpg')},
    {service: 'MakeUp', image: require('../../assets/makeup.jpg')},
    {service: 'Facial', image: require('../../assets/Facial.jpg')},
    {service: 'Waxing', image: require('../../assets/waxing.jpg')},
    {service: 'Nails', image: require('../../assets/nails.jpg')},
    {service: 'Manicure Pedicure', image: require('../../assets/maniPed.jpg')}
  ]

  var servicesData = services;

  if(search != ''){
    servicesData = services.filter((val) => (
      val.service.toLowerCase().includes(search.toLowerCase())
    ))
  }

  const serviceList = ({item}) => {

    return(
      <View>
        
        <CategoryCard
          imageSource={item.image}
          title={item.service}
          onPress={() => navigation.push(Constants.screen.UserServiceRequest, {type: item.service})}
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
          showsVerticalScrollIndicator={false}
          data={servicesData}
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
});

export default BeautyServices;