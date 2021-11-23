import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, Button, ScrollView, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';

//Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Images

//White Panel for restaurants
const McDoImage = { uri: "https://cdn.discordapp.com/attachments/882878382679920722/909107269260681216/20a3b455671746a1b02a2cac627b5a67_1600322490671317355.png" };

//Building Image
const SM_City_North_Edsa_Mall = { uri: "https://cdn.discordapp.com/attachments/882878382679920722/909115356558290964/SM_City_North_Edsa_small.png" };

//Functions

const Screen2 = ({ navigation }) => {

    //Array of WhitePanels
    let array = [];

    for (let i = 0; i < 10; i++) {
        array.push(
            <TouchableOpacity style={styles.WhitePanel} onPress={() => navigation.navigate('Screen1')} >
                <Image source={McDoImage} style={styles.McdoImageStyle}></Image>
                <View style={{ flex: 1 }}>
                    <Text style={styles.RestoName}>McDonaldu</Text>
                    <Text>11 Fort Santiago St. Holy Spirit Quezon City </Text>
                    <Text>Floor 152</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.MainView}>
            <Text style={styles.YourLocation} >Your Location</Text>
            <Text style={styles.MyLocation} >♥ 11 Fort Santiago</Text>

            <TextInput style={styles.SearchBar} placeholder="Search"></TextInput>

            <Text style={styles.NearbyMalls}>Nearby Malls</Text>

            <ScrollView style={styles.ScrollView}>

                <View> {array} </View>

                {/* <View style={styles.WhitePanel} onPress={() => navigation.navigate('Screen1')} >
                    <Image source={SM_City_North_Edsa_Mall} style={styles.McdoImageStyle}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.RestoName}>SM North Edsa!</Text>
                        <Text>11 Fort Santiago St. Holy Spirit Quezon City </Text>
                        <Text>Floor 152</Text>
                    </View>
                </View> */}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        flexWrap: 'wrap',
    },

    YourLocation: {
        color: 'grey',
        fontSize: 15,
    },

    MyLocation: {
        fontSize: 19,
    },

    SearchBar: {
        marginTop: 15,
        padding: 15,
        width: 320,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 15,
        borderColor: 'white',
        fontSize: 18,
    },

    NearbyMalls: {
        fontSize: 23,
        fontWeight: "bold",

    },

    ScrollView: {
        marginTop: 10,
        marginBottom: 20,
        flexWrap: 'wrap',
    },

    WhitePanel: {
        height: 125,
        width: 380,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "white"
    },

    McdoImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 12,

    },

    RestoName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 12
    }

});

export default Screen2