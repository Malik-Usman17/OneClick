import React from 'react';
import {View, Text, TextInput,StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextField = ({ fieldTitle, iconName, label, value, onChangeText, keyboardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoTitle}>{fieldTitle}</Text>
      
      <View style={styles.textFieldContainer}>
        
        <Icon
          name={iconName}
          color={'black'}
          size={20}
        />
        
        <TextInput
          keyboardType={keyboardType}
          style={styles.textField}
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
        />

      </View>

      <View style={styles.line} />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
     marginTop: 2
  },
  textFieldContainer:{
    flexDirection :'row',
    alignItems: 'center',
    paddingLeft:10
  },
  textField:{
    flex: 1,
    paddingLeft: 8
  },
  line:{
    height: Dimensions.get('window').height * 0.002,
    width: Dimensions.get('window').width - 155,
    backgroundColor: 'black',
    marginLeft: 10
    
  },
  infoTitle:{
    fontSize: 13,
    fontWeight: '700',
    paddingLeft: 10,
    marginTop: 7
  },
});

export default TextField;