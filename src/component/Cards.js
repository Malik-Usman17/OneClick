import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';

const Cards = ({imageSource, title, onPress}) => {
  return(
    <TouchableOpacity style={styles.cardView} onPress={onPress}>

      <Image 
        source={imageSource}
        style={styles.cardImage}
      />

      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView:{
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.22,
    width: Dimensions.get('window').width * 0.41,
  },
  cardImage:{
    height: Dimensions.get('window').height * 0.12,
    width: Dimensions.get('window').width * 0.27,
    resizeMode: 'contain',
  },
  title:{
    width: Dimensions.get('window').width * 0.25, 
    textAlign: 'center',
    //fontWeight: '600'
  }
})

export default Cards;