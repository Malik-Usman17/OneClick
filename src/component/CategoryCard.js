import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../Constants/colors';


const CategoryCard = ({imageSource, title, onPress}) => {
  return(
      <TouchableOpacity style={styles.container} onPress={onPress}>
        
        <Image
          source={imageSource}
          style={styles.image}
        />

        <Text style={styles.title}>{title}</Text>

      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingLeft: 20,
  },
  image:{
    width: 100,
    height: 125,
    resizeMode: 'contain',
  },
  title:{
    paddingHorizontal: 3,
    width: '65%',
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 18
  }
});

export default CategoryCard;