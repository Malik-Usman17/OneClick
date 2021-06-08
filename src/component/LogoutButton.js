import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../Constants/colors';

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
