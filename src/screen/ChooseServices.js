import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../Constants/colors';
import RadioForm from 'react-native-radio-form';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ChooseServices = () => {

    const [radioButton, setRadioButton] = useState(null);

    // var radio_props = [
    //     { label: 'ON', value: 'ON' },
    //     { label: 'OFF', value: 'OFF' },
    //   ];

    var categories = [
        {label: 'Personal expert fitness', value: 'PEF'},
        {label: 'Home Tutor', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'General Constracutor', value: 'GC'},
        {label: 'AC Pressure Specialist', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'Personal expert fitness', value: 'PEF'},
        {label: 'Home Tutor', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'Personal expert fitness', value: 'PEF'},
        {label: 'Home Tutor', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'Personal expert fitness', value: 'PEF'},
        {label: 'Home Tutor', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'General Constracutor', value: 'GC'},
        {label: 'AC Pressure Specialist', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'Personal expert fitness', value: 'PEF'},
        {label: 'Home Tutor', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'},
        {label: 'Personal expert fitness', value: 'PEF'},
        {label: 'Home Tutor', value: 'HT'},
        {label: 'Laptop Repair Expert', value: 'LRE'}
    ]

    return(
        <>
            <View style={styles.serachContainer}>
                <Feather name='search' size={25} color='gray' />
                <TextInput
                    placeholder='Search for Business Category'
                    style={{ marginLeft: 15 }}
                />
            </View>

          <Text style={styles.heading}>All Categories</Text>

          <RadioForm 
            //style={{backgroundColor: 'blue'}}
            dataSource={categories}
            itemShowKey='label'
            itemRealKey='value'
            circleSize={20}
            initial={radioButton}
            //formHorizontal={true}
            labelHorizontal={true}
            onPress={(value) => {
                setRadioButton(value)
            }}
            outerColor='red'
            innerColor='red'
           />

           <TouchableOpacity>
               <Text>Submit</Text>
           </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    serachContainer:{
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    heading:{
        color: 'gray',
        backgroundColor: colors.primaryBg,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    }
});

export default ChooseServices;