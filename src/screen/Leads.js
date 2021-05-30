import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';

const Leads = ({navigation}) => {
   
    const data=[
       {'name': 'User Name 1', 'task': 'Task Details', 'Time': '3:10', 'Address': 'abc09 street'},
       {'name': 'User Name 2', 'task': 'Task Details', 'Time': '1:10', 'Address': 'abc street'},
       {'name': 'User Name 3', 'task': 'Task Details', 'Time': '5:40', 'Address': 'abcdef street'},
       {'name': 'User Name 4', 'task': 'Task Details', 'Time': '4:10', 'Address': 'abc street'},
       {'name': 'User Name 5', 'task': 'Task Details', 'Time': '9:10', 'Address': '114abc street'}
    ]

    const tasks = ({item}) => {
        return(
            <TouchableOpacity 
              style={styles.container}
              onPress={() => navigation.push(Constants.screen.LeadRequirement)}
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
        //backgroundColor: 'red'
    },
    container:{
        backgroundColor: colors.white, 
        elevation: 20, 
        borderRadius: 10,
        margin: 8,
        //backgroundColor: 'red'
    }
})

export default Leads;