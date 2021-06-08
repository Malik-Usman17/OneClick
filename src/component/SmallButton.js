import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../Constants/colors';

const SmallButton = ({title, onPress}) => {
    return(
        <TouchableOpacity 
          style={styles.button}
          onPress={onPress}
        >
          <Text style={{fontWeight: 'bold', color: colors.white, fontSize: 18}}>{title}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        elevation: 15,
        backgroundColor: colors.secondaryColor,
        width: Dimensions.get('window').width * 0.33,
        height: Dimensions.get('window').height * 0.048,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SmallButton;