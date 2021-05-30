import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../Constants/colors';

const ShortInfo = ({title, value}) => {
    return(
        <View>
            <Text style={styles.textHeading}>{title}</Text>

            <View style={styles.timeBox}>
                <Text>{value}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textHeading:{
        color: colors.colorPrimary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    timeBox:{
        borderColor: colors.gray,
        borderWidth: 2,
        borderRadius: 8,
        width: Dimensions.get('window').width * 0.33,
        height: Dimensions.get('window').height * 0.048,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5 
    },
});

export default ShortInfo;