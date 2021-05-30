import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../Constants/colors';
import Button from '../component/Button';
import SmallButton from '../component/SmallButton';
import ShortInfo from '../component/ShortInfo';
import Constants from '../Constants/constants.json';


const LeadRequirement = ({navigation}) => {
    return(
        <View style={{backgroundColor: colors.primaryBg, padding: 8, flex: 1}}>

            <View style={styles.clientContainer}>
                <Text style={styles.textHeading}>Client Name</Text>
                <Text style={styles.text}>User Name</Text>
                <Text style={{...styles.textHeading, marginTop: 10}}>Task Category</Text>
                <Text style={styles.text}>Laptop Repair</Text>
            </View>

            <View style={styles.timeContainer}>

                <ShortInfo 
                  title='Date'
                  value='07/05/2021'
                />

                <ShortInfo 
                  title='Time'
                  value='12:30 AM'
                />

            </View>

            <View style={{...styles.clientContainer, marginTop: 8}}>
                <Text style={styles.textHeading}>Location</Text>
                <Text style={styles.text}>Address, Street</Text>
            </View>

            <View style={{...styles.clientContainer, marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly'}}>

                <SmallButton 
                  title='Reject'
                  onPress={() => navigation.goBack()}
                />

                <SmallButton 
                  title='Accept'
                  onPress={() => navigation.push(Constants.screen.Quotes)}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    clientContainer:{
        backgroundColor: colors.white,
        padding: 20,
        paddingLeft: 30
    },
    textHeading:{
        color: colors.colorPrimary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 14,
        //fontWeight: 'bold'
    },
    timeContainer:{
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 12,
        marginTop: 8,
        justifyContent: 'space-around'
    },
});

export default LeadRequirement;