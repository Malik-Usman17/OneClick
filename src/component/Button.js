import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import {colors} from '../Constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Button({ style, title, onPress, buttonTextStyle, iconName, iconStyle}) {

    return <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
        <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
        
        {
          iconName ?
            <MaterialCommunityIcons 
              name={iconName}
              size={22}
              color={colors.white}
              style={iconStyle}
            />
          :
          null
        }

    </TouchableOpacity>;
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.colorPrimary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.065,
    width: Dimensions.get('window').width - 46,
   //marginHorizontal: 23,
},
buttonText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: colors.white
},
})

export default Button;