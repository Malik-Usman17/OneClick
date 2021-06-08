import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { colors } from '../Constants/colors';
import Constants from '../Constants/constants.json';
import Header from '../component/Header';

const SPNotification = ({navigation}) => {
   
    const data=[
       {title: 'Job Name', task: 'Task Details', Time: '3:10', message: 'This job has a new message'},
       {title: 'Job Name', task: 'Task Details', Time: '1:10', message: 'This job has a new message'},
       {title: 'Job Name', task: 'Task Details', Time: '5:40', message: 'This job has a new message'},
    ]

    const tasks = ({item}) => {
        return(
            <View 
              style={styles.container}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={{color: colors.colorPrimary, fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                        <Text>{item.task}</Text>
                    </View>
    
                    <View>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>{item.Time}</Text>
                    </View>
                </View>
    
                <Text style={{padding: 10}}>{item.message}</Text>
            </View>
        )
    }

    return(
        <View style={{backgroundColor: colors.primaryBg, flex: 1}}>

            <Header title='Notifications' />

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

export default SPNotification;