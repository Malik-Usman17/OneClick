import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import CategoryCard from '../component/CategoryCard';
import SearchField from '../component/SearchField';
import { colors } from '../Constants/colors';

const AppliancesRepair = () => {
  return(
    <View style={styles.container}>

      <SearchField label='Search Services'/>

      <ScrollView style={styles.categoryContainer}>
        <CategoryCard
          imageSource={require('../../assets/AcRepair.png')}
          title='AC Services and Repair'
        />

        <CategoryCard
          imageSource={require('../../assets/HeaterRepair.png')}
          title='Heater Repair'
        />

        <CategoryCard
          imageSource={require('../../assets/LaptopRepair.png')}
          title='Laptop Repair'
        />

        <CategoryCard
          imageSource={require('../../assets/MicrowaveRepair.png')}
          title='Microwave Repair'
        />

        <CategoryCard
          imageSource={require('../../assets/PhoneRepair.png')}
          title='Phone Repair'
        />

        <CategoryCard
          imageSource={require('../../assets/FridgeRepair.png')}
          title='Refrigerator Repair'
        />

        <CategoryCard
          imageSource={require('../../assets/TvRepair.png')}
          title='TV Repair'
        />

      </ScrollView>

      {/* </ScrollView> */}

    </View>
  );
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