import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../Constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const SPProfile = () => {
    return(
        <ScrollView
          style={styles.scroll}
        >
            <View style={styles.infoContainer}>
                <Image source={require('../../assets/User.png')} style={styles.image}/>

                <View style={styles.user}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>UserName</Text>
                    <Text>user@mail.com</Text>
                    <Text>+923132123456</Text>
                </View>

            </View>

            <View style={styles.details}>
                
                <TouchableOpacity style={styles.category}>
                    <AntDesign name='arrowsalt' size={30}/>
                    <Text style={styles.detailText}>Choose Your Services</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.category, marginTop: 55}}>
                    <Feather name='book-open' size={30}/>
                    <Text style={styles.detailText}>About Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.category, marginTop: 55}}>
                    <Entypo name='location' size={30}/>
                    <Text style={styles.detailText}>My Service Location</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.category, marginTop: 55, marginBottom: 10}}>
                    <Feather name='sidebar' size={30}/>
                    <Text style={styles.detailText}>Id Proof</Text>
                </TouchableOpacity>
               
            </View>

            <TouchableOpacity style={styles.connect}>
                <Text style={{fontSize: 18}}>Invite and connect with your friends</Text>
                <AntDesign name='arrowright' size={30}/>
            </TouchableOpacity>
              

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: colors.primaryBg
    },
    infoContainer:{
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginTop: 10,
        height: Dimensions.get('window').height * 0.12,
        alignItems: 'center'
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: 'green',
        borderWidth: 2,
        resizeMode: 'contain',
        marginLeft: 10,
        overflow: 'hidden'  
    },
    user:{
        marginTop: 5,
        marginLeft: 5
    },
    details:{
        marginTop: 20,
        backgroundColor: colors.white,
        padding: 20
    },
    category:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        //backgroundColor: 'green',
    },
    detailText:{
        marginLeft: 40,
        fontSize: 20,
        fontWeight: 'bold'
    },
    connect:{
        //backgroundColor: 'red',
        //width: Dimensions.get('window').width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //backgroundColor: colors.white,
        marginTop: 50,
        alignItems: 'center'
    }
})

export default SPProfile;