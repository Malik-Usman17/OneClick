import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TextInput, ScrollView, Dimensions, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../Constants/colors';
import RadioForm from 'react-native-radio-form';
//import { TouchableOpacity } from 'react-native-gesture-handler';


const ChooseServices = () => {

    const [radioButton, setRadioButton] = useState(null);

    var categories = [
        {services: 'Personal expert fitness'},
        {services: 'Home Tutor'},
        {services: 'Laptop Repair Expert'},
        {services: 'General Constracutor'},
        {services: 'AC Pressure Specialist'},
        {services: 'Gadget Repair'},
        {services: 'Car Mechanic'},
        {services: 'Home Tutor'}
    ]

    const itemList = ({item}) => {
        return(
            <TouchableOpacity style={styles.cardContainer}>
                <Text style={styles.serviceText}>{item.services}</Text>
            </TouchableOpacity>
        )
    }

    return(

      

        <View
          style={styles.container}
        >

            <View style={styles.serachContainer}>
                <Feather name='search' size={25} color='gray' />
                 <TextInput
                   placeholder='Search for Business Category'
                   style={{ marginLeft: 15 }}
                />
            </View>

            <FlatList 
              data={categories}
              renderItem={itemList}
              keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        padding: 20, 
        backgroundColor: colors.primaryBg
    },
    cardContainer:{
        marginBottom: 15,
        paddingLeft: 20,
        backgroundColor: colors.white,
        width: '100%',
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 20
    },
    serachContainer:{
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
        height: Dimensions.get('window').height * 0.08
    },
    heading:{
        color: 'gray',
        backgroundColor: colors.primaryBg,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    serviceText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.colorPrimary
    }
});

export default ChooseServices;