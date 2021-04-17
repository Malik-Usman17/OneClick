import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';


const CategoryCard = ({imageSource, title}) => {
  return(
      <TouchableOpacity style={styles.container}>
        
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
    //backgroundColor: 'pink'
  },
  title:{
    //backgroundColor: 'green',
    paddingHorizontal: 3,
    width: '65%',
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 18
  }
});

export default CategoryCard;