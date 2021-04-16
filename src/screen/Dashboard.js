import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {colors} from '../Constants/colors';
import Cards from '../component/Cards';
import Constants from '../Constants/constants.json';

const Dashboard = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.cardCategoryView}>

        <Cards 
          imageSource={require('../../assets/ApplianceRepair.png')}
          title='Appliances Repair'
          onPress={() => navigation.push(Constants.screen.AppliancesRepair)}
        />

        <Cards 
          imageSource={require('../../assets/HomeRepairCleaning.png')}
          title='Home Repair and Cleaning'
        />

        <Cards 
          imageSource={require('../../assets/Events.png')}
          title='Wedding and Events'
        />

        <Cards 
          imageSource={require('../../assets/Health.png')}
          title='Health and Fitness'
        />

        <Cards 
          imageSource={require('../../assets/Beauty.png')}
          title='Beauty Services'
        />

        <Cards 
          imageSource={require('../../assets/Vehicle.png')}
          title='Vehicle Care and Services'
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  cardCategoryView:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 110,
    //backgroundColor: 'green',
    paddingHorizontal: 12,
    justifyContent: 'space-around'
  },
})

export default Dashboard;