import React, {useState} from 'react';
import { Dimensions, ScrollView, StyleSheet, View, FlatList} from 'react-native';
import CategoryCard from '../component/CategoryCard';
import SearchField from '../component/SearchField';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';

const AppliancesRepair = ({navigation}) => {

  const [search, setSearch] = useState('');


  const services = [
    {service: 'AC Services and Repair', image: require('../../assets/AcRepair.png')},
    {service: 'Heater Repair', image: require('../../assets/HeaterRepair.png')},
    {service: 'Laptop Repair', image: require('../../assets/LaptopRepair.png')},
    {service: 'Microwave Repair', image: require('../../assets/MicrowaveRepair.png')},
    {service: 'Phone Repair', image: require('../../assets/PhoneRepair.png')},
    {service: 'Refrigerator Repair', image: require('../../assets/FridgeRepair.png')},
    {service: 'TV Repair', image: require('../../assets/TvRepair.png')}
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
        onChangeText={(val) => setSearch(val)}
      />

      <View style={{ marginTop: 10, marginBottom: 50 }}>

        <FlatList
          data={servicesData}
          renderItem={serviceList}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primaryBg,
  },
  categoryContainer:{
    marginTop: 15,
    backgroundColor: colors.white
  },
  searchView:{
    backgroundColor: 'pink', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderRadius: 15,
    width: Dimensions.get('window').width * 0.8,
    //padding: 10
  },
  inputField:{
    paddingLeft: 18
  },
  icon:{
    paddingRight: 10
  }
});

export default AppliancesRepair;