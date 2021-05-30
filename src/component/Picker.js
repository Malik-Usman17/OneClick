import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function PickerSelector({items = [], fieldTitle}) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Text style={styles.infoTitle}>{fieldTitle}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.name} value={item.value} />
        ))}
      </Picker>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  infoTitle: {
    fontSize: 13,
    fontWeight: '700',
    paddingLeft: 10,
    marginTop: 7,
  },
  line: {
    height: Dimensions.get('window').height * 0.002,
    width: Dimensions.get('window').width - 155,
    backgroundColor: 'black',
    marginLeft: 10
    //marginHorizontal: 10,
  },
});
