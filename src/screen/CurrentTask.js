import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';
import Header from '../component/Header';

const CurrentTask = ({navigation}) => {
   
    const data=[
       {'name': 'User Name 1', 'task': 'Task Details', 'Time': '3:10', 'Address': 'abc09 street'},
       {'name': 'User Name 2', 'task': 'Task Details', 'Time': '1:10', 'Address': 'abc street'},
    ]

    const tasks = ({item}) => {
        return(
            <TouchableOpacity 
              style={styles.container}
              //onPress={() => navigation.push(Constants.screen.LeadRequirement)}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={{color: colors.colorPrimary, fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                        <Text>{item.task}</Text>
                    </View>
    
                    <View>
                        <Text>{item.Time}</Text>
                    </View>
                </View>
    
                <Text style={{padding: 10}}>{item.Address}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={{backgroundColor: colors.primaryBg, flex: 1}}>

            <Header title='Current Tasks'/>
            <FlatList 
              data={data}
              renderItem={tasks}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    container:{
        backgroundColor: colors.white, 
        elevation: 10, 
        borderRadius: 10,
        margin: 8,
    }
})

export default CurrentTask;