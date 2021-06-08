import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Header from '../component/Header';
import {colors} from '../Constants/colors';
import {useSelector} from 'react-redux';

const Notification = () => {

 const notification = useSelector((state) => state.userNotification.notice);
 const currentUser = useSelector((state) => state.currentUser.currentUser);

 const tasks = ({item}) => {

     return(
       currentUser.type == item.userType ?
         <View 
           style={styles.container}
         >
             <View style={styles.innerContainer}>
                 <View>
                     <Text style={{color: colors.colorPrimary, fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                     <Text style={{color: colors.secondaryColor, fontWeight: 'bold'}}>{item.subText}</Text>
                 </View>
 
                 <View>
                     <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.date}</Text>
                 </View>
             </View>
 
             <Text style={{padding: 10}}>{item.details}</Text>
         </View>
         : null
     )
 }

 return(

     <View style={{backgroundColor: colors.primaryBg, flex: 1}}>

         <Header title='Notifications' />

         <FlatList 
           data={notification}
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



export default Notification;