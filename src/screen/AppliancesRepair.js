import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {colors} from '../Constants/colors';
import CategoryCard from '../component/CategoryCard';

const AppliancesRepair = () => {
  return(
    <View style={styles.container}>

      {/* <ScrollView> */}

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
    marginTop: 100,
    backgroundColor: colors.white
  }
});

export default AppliancesRepair;