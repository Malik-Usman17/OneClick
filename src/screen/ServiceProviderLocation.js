import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';
import Button from '../component/Button';


const ServiceProviderLocation = () => {

    const [activeTile, setActiveTile] = useState(null)

    function selectCity(index){
        setActiveTile(index);
    }

    return(
        <ScrollView 
          style={{flex: 1, padding: 12}}
        >

            <View style={styles.container}>
                
                <TouchableOpacity onPress={() => selectCity(0)} style={{...styles.Citycontainer, backgroundColor: activeTile === 0 ? colors.colorPrimary : '#fff',}}>
                    <Text style={{...styles.cityText, color: activeTile === 0 ? '#fff' : colors.colorPrimary,}}>Karachi</Text>
                    <Text style={{...styles.countryText, color: activeTile === 0 ? '#ddd' : colors.colorPrimary}}>Pakistan</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => selectCity(1)} style={{...styles.Citycontainer, backgroundColor: activeTile === 1 ? colors.colorPrimary : '#fff',}}>
                    <Text style={{...styles.cityText, color: activeTile === 1 ? '#fff' : colors.colorPrimary,}}>Lahore</Text>
                    <Text style={{...styles.countryText, color: activeTile === 1 ? '#ddd' : colors.colorPrimary}}>Pakistan</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => selectCity(2)} style={{...styles.Citycontainer, backgroundColor: activeTile === 2 ? colors.colorPrimary : '#fff', marginTop: 20}}>
                    <Text style={{...styles.cityText, color: activeTile === 2 ? '#fff' : colors.colorPrimary,}}>Faisalabad</Text>
                    <Text style={{...styles.countryText, color: activeTile === 2 ? '#ddd' : colors.colorPrimary}}>Pakistan</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => selectCity(3)} style={{...styles.Citycontainer, backgroundColor: activeTile === 3 ? colors.colorPrimary : '#fff', marginTop: 20}}>
                    <Text style={{...styles.cityText, color: activeTile === 3 ? '#fff' : colors.colorPrimary}}>Sukkur</Text>
                    <Text style={{...styles.countryText, color: activeTile === 3 ? '#ddd' : colors.colorPrimary}}>Pakistan</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => selectCity(4)} style={{...styles.Citycontainer, backgroundColor: activeTile === 4 ? colors.colorPrimary : '#fff', marginTop: 20}}>
                    <Text style={{...styles.cityText, color: activeTile === 4 ? '#fff' : colors.colorPrimary}}>Hyderabad</Text>
                    <Text style={{...styles.countryText, color: activeTile === 4 ? '#ddd' : colors.colorPrimary}}>Pakistan</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => selectCity(5)} style={{...styles.Citycontainer, backgroundColor: activeTile === 5 ? colors.colorPrimary : '#fff', marginTop: 20}}>
                    <Text style={{...styles.cityText, color: activeTile === 5 ? '#fff' : colors.colorPrimary}}>Islamabad</Text>
                    <Text style={{...styles.countryText, color: activeTile === 5 ? '#ddd' : colors.colorPrimary}}>Pakistan</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.ButtonContainer}>
                <Button
                  style={styles.button} 
                  title='Save'
                />
            </View>

           

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        height: Dimensions.get('window').height * 0.5,
    },
    Citycontainer:{
        padding: 10,
        borderRadius: 8,
        width: '40%',
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: '#fff',
        elevation: 5
    },
   cityText:{
       fontSize: 20,
       fontWeight: 'bold',
       color: colors.colorPrimary
   },
   countryText:{
       fontWeight: 'bold'
   }, 
   ButtonContainer:{
       alignItems: 'center'
   },
   button:{
    backgroundColor: colors.secondaryColor,
    width: Dimensions.get('window').width * 0.4
   }

})

export default ServiceProviderLocation;