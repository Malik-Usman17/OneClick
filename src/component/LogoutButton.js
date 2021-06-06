import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../Constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LogoutButton({style, onPress}) {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      <Ionicons name="log-out-outline" size={30} color={colors.white}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutButton;
