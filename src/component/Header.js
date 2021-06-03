import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LogoutButton from './LogoutButton';
import {useNavigation} from '@react-navigation/native';


const Header = ({title}) => {

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

            <LogoutButton />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //alignSelf: 'flex-end'
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
    }
})

export default Header;