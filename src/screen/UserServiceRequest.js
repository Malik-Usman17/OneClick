import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from '../Constants/constants.json';

import { colors } from '../Constants/colors'

const daysOfMonth = [
    { date: '01', day: 'Tue' },
    { date: '02', day: 'Wed' },
    { date: '03', day: 'Thu' },
    { date: '04', day: 'Fri' },
    { date: '05', day: 'Sat' },
    { date: '06', day: 'Sun' },
    { date: '07', day: 'Mon' },
    { date: '08', day: 'Tue' },
    { date: '09', day: 'Wed' },
    { date: '10', day: 'Thu' },
    { date: '11', day: 'Fri' },
    { date: '12', day: 'Sat' },
    { date: '13', day: 'Sun' },
    { date: '14', day: 'Mon' },
    { date: '15', day: 'Tue' },
    { date: '16', day: 'Wed' },
    { date: '17', day: 'Thu' },
    { date: '18', day: 'Fri' },
    { date: '19', day: 'Sat' },
    { date: '20', day: 'Sun' },
    { date: '21', day: 'Mon' },
    { date: '22', day: 'Tue' },
    { date: '23', day: 'Wed' },
    { date: '24', day: 'Thu' },
    { date: '25', day: 'Fri' },
    { date: '26', day: 'Sat' },
    { date: '27', day: 'Sun' },
    { date: '28', day: 'Mon' },
    { date: '29', day: 'Tue' },
    { date: '30', day: 'Wed' },
];

const timeSlots = [
    { time: '10 - 11 am' },
    { time: '11 - 12 pm' },
    { time: '12 - 01 pm' },
    { time: '01 - 02 pm' },
    { time: '02 - 03 pm' },
    { time: '03 - 04 pm' },
    { time: '04 - 05 pm' },
    { time: '05 - 06 pm' },
    { time: '06 - 07 pm' },
]


const UserServiceRequest = ({navigation}) => {

    const [activeDate, setActiveDate] = useState(null);
    const [activeTime, setActiveTime] = useState(null);

    function selectDate(index) {
        setActiveDate(index)
    }
    function selectTime(index) {
        setActiveTime(index)
    }

    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.containerView}>
                    <View>
                        <Text style={styles.labelText}>Where do you want the service?</Text>
                        <View style={styles.blueUnderline} />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.textinputLabel}>Location/Service Area</Text>
                        <TextInput style={styles.textInput} placeholder="Enter Area..." />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.textinputLabel}>Name</Text>
                        <TextInput style={styles.textInput} placeholder="Enter Name..." />
                    </View>
                </View>
                <View style={styles.containerView}>
                    <View>
                        <Text style={styles.labelText}>Select Date</Text>
                        <View style={styles.blueUnderline} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <FlatList 
                          horizontal 
                          data={daysOfMonth} 
                          renderItem={({ item, index }) =>
                            <TouchableOpacity key={index} style={{ ...styles.dateTile, backgroundColor: index === activeDate ? colors.secondaryColor : '#fff', borderColor: index === activeDate ? colors.secondaryColor : colors.primaryBg }} onPress={() => selectDate(index)}>
                                <Text style={{ ...styles.dayOfWeek, color: index === activeDate ? '#fff' : '#707070' }}>{item.day}</Text>
                                <Text style={{ ...styles.dateNum, color: index === activeDate ? '#fff' : '#000' }}>{item.date}</Text>
                            </TouchableOpacity>}
                          keyExtractor={(item, index) => index.toString()} 
                        />
                    </View>
                </View>
                <View style={styles.containerView}>
                    <View>
                        <Text style={styles.labelText}>Select Time</Text>
                        <View style={styles.blueUnderline} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <FlatList 
                          keyExtractor={(item, index) => index.toString()} 
                          horizontal 
                          data={timeSlots} 
                          renderItem={({ item, index }) =>
                            <TouchableOpacity 
                              key={index} 
                              style={{ ...styles.dateTile, height: 50, width: 120, backgroundColor: index === activeTime ? colors.secondaryColor : '#fff', borderColor: index === activeTime ? colors.secondaryColor : colors.primaryBg }} 
                              onPress={() => selectTime(index)}
                            >
                                <Text style={{ ...styles.dayOfWeek, color: index === activeTime ? '#fff' : '#707070' }}>{item.time}</Text>
                            </TouchableOpacity>} 
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity 
                      style={styles.saveButton}
                    >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.primaryBg,
        paddingBottom: 10
    },
    containerView: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#fff',
        marginVertical: 10,
    },
    labelText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    blueUnderline: {
        height: 2,
        width: 100,
        backgroundColor: colors.colorPrimary,
        marginVertical: 5
    },
    textinputLabel: {
        color: colors.colorPrimary,
        //color: '#707070',
        marginLeft: 10
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    dateTile: {
        width: 75,
        height: 75,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 15,
        marginHorizontal: 7,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayOfWeek: {
        color: '#707070',
        fontWeight: 'bold',
        fontSize: 16,
    },
    dateNum: {
        fontSize: 16
    },
    saveButton: {
        borderRadius: 15,
        backgroundColor: colors.colorPrimary,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 15,
        width: 150,
        height: 40,
        alignSelf: 'center',
        marginRight: 10,
        marginTop: 15
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default UserServiceRequest;