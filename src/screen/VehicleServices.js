import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CategoryCard from '../component/CategoryCard';
import SearchField from '../component/SearchField';
import { colors } from '../Constants/colors';

const VehicleServices = () => {

  const [search, setSearch] = useState('');

  const services = [
    { service: 'Engine Oil Change And Filter Replacement', image: require('../../assets/EngineOil.jpg') },
    { service: 'Checking Lights, Tyres', image: require('../../assets/checkingLights.jpg') },
    { service: 'Checking Hydraulic Fluid And Coolant Levels', image: require('../../assets/hydraulicFluid.jpg') },
    { service: 'Checking The Cooling System', image: require('../../assets/checkCooling.jpg') },
    { service: 'Engine Tuning', image: require('../../assets/engineTuning.jpg') },
    { service: 'Suspension Checks', image: require('../../assets/suspensionCheck.jpg')},
    { service: 'Car And Bike Wash', image: require('../../assets/carWash.jpg') }
  ]

  var vehicle = services;

  if (search != '') {
    vehicle = services.filter((val) => val.service.toLowerCase().includes(search.toLowerCase()))
  }

  const serviceList = ({ item }) => {

    return (
      <View>

        <CategoryCard
          imageSource={item.image}
          title={item.service}
          onPress={() => navigation.push(Constants.screen.UserServiceRequest)}
        />

      </View>
    )
  }

  return (
    <View style={styles.container}>

      <SearchField
        label='Search Services'
        value={search}
        onChangeText={(val) => setSearch(val)}
      />

      <View style={{ marginTop: 10, marginBottom: 50 }}>

        <FlatList
          data={vehicle}
          renderItem={serviceList}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg
  },
  categoryContainer: {
    marginTop: 15,
    backgroundColor: colors.white
  },
});

export default VehicleServices;