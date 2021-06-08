import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LogoutButton from './LogoutButton';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Header = ({title, onPress}) => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
                <MaterialIcons 
                  name='arrow-back' 
                  size={25} 
                  color={colors.white}
                  style={{marginLeft: 10}}
                />

            </TouchableOpacity>

            <Text style={styles.heading}>{title}</Text>

            <TouchableOpacity style={styles.logout} onPress={onPress}>

              <Ionicons name="log-out-outline" size={30} color={colors.white}/>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       backgroundColor: colors.colorPrimary,
       height: Dimensions.get('window').height * 0.08,
       width: '100%',
    },
    heading:{
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white
    },
    logout: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Header;