import React from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchField = ({value, onChangeText, label}) => {
  return(
    <View style={styles.container}>
      
      <View style={styles.searchView}>
        
        <TextInput 
          style={styles.inputField}
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
        />

        <Feather 
          name='search' 
          size={20} 
          style={styles.icon}
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center', 
    marginTop: 10,
    
  },
  searchView:{
    backgroundColor: 'white', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    width: Dimensions.get('window').width * 0.8,
  },
  inputField:{
    paddingLeft: 18
  },
  icon:{
    marginRight: 12
  }
});

export default SearchField;