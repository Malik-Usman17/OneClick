import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import {colors} from '../Constants/colors';
import Cards from '../component/Cards';
import Constants from '../Constants/constants.json';
import {useSelector} from 'react-redux';

const Dashboard = ({navigation}) => {

  const notification = useSelector((state) => state.userNotification.notice);
  console.log('Dashboard Note:',notification)

  return(
    <ScrollView style={styles.container}>
      <View style={styles.cardCategoryView}>

        <Cards 
          imageSource={require('../../assets/Appliance.png')}
          title='Appliances Repair'
          onPress={() => navigation.push(Constants.screen.AppliancesRepair)}
        />

        <Cards 
          imageSource={require('../../assets/Homecleaning.png')}
          title='Home Repair and Cleaning'
          onPress={() => navigation.push(Constants.screen.HomeCleaning)}
        />

        <Cards 
          imageSource={require('../../assets/Events.png')}
          title='Wedding and Events'
          onPress={() => navigation.push(Constants.screen.EventsWedding)}
        />

        <Cards 
          imageSource={require('../../assets/Healths.png')}
          title='Health and Fitness'
          onPress={() => navigation.push(Constants.screen.HealthFitness)}
        />

        <Cards 
          imageSource={require('../../assets/BeautyServices.png')}
          title='Beauty Services'
          onPress={() => navigation.push(Constants.screen.BeautyServices)}
        />

        <Cards 
          imageSource={require('../../assets/Carservices.png')}
          title='Vehicle Care and Services'
          onPress={() => navigation.push(Constants.screen.VehicleServices)}
        />

      </View>
    </ScrollView>
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
    marginTop: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
})

export default Dashboard;