import React, { Component, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button, Dimensions, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomSheet from "react-native-gesture-bottom-sheet";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown, Message, Header } from 'semantic-ui-react';

import AsyncStorage from "@react-native-async-storage/async-storage";

//Screens
import Screen2 from './Screen2'
import SearchMallScreen from './SearchMallScreen';

//Images
import logo from '../assets/logo2_2.png';
import settings_logo from '../assets/settings.png'

//Components
import ModalComponent from '../components/ModalComponent';

const McDoImage = { uri: "https://cdn.discordapp.com/attachments/882878382679920722/909107269260681216/20a3b455671746a1b02a2cac627b5a67_1600322490671317355.png" };

const SM_City_North_Edsa_Mall = { uri: "https://www.smsupermalls.com/data/uploads/2018/02/SM-Aura-Premier1_small.jpg" };

const Market_Market_logo = { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Market_Market_Logo.svg/1200px-Market_Market_Logo.svg.png" };

const Uptown_logo = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmD2AZFlx7SrggdBkrEphVbKhMQm066VmptR_mMQa-tIgYkhIFhSwIQ63oRRRKfy-Ezs&usqp=CAU" };

//Dimensions

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const countryOptions = [
    { key: 'af', value: 'Makati City', text: 'Makati City' },
    { key: 'ax', value: 'Taguig City', text: 'Taguig City' },
    { key: 'al', value: 'Pasay City', text: 'Pasay City' },
    { key: 'dz', value: 'Pateros', text: 'Pateros' },
    { key: 'as', value: 'Marikina', text: 'Marikina' },
]

const Screen1 = ({ navigation }) => {
    const bottomSheet = useRef();
    const [cityError, setCityError] = useState(false);

    const setCity = async (value) => {
        await AsyncStorage.setItem('city', value);
    }

    let array = [];

    const goToScreen = async (screen, params = {}) => {
        const city = await AsyncStorage.getItem('city');
        if (city) {
            setCityError(false);
            navigation.navigate(screen, params);
        } else {
            setCityError(true);
        }
    }

    const stackBottom = (value, mallName) => {
        setCity(value);
        goToScreen("SearchShopScreen", { mallName });
    }

    for (let i = 0; i < 1; i++) {
        array.push(
            <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
                <TouchableOpacity style={styles.WhitePanel}
                    onPress={() => stackBottom("Taguig City", "SM Aura")} >
                    <Image source={SM_City_North_Edsa_Mall} style={styles.McdoImageStyle}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.RestoName}>SM Aura</Text>
                        <Text>26th Street, Corner McKinley Pkwy, Taguig, 1630 Metro Manila</Text>
                        <Text style={{ marginTop: 10 }}>4 ⋆⋆⋆⋆</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.WhitePanel}
                    onPress={() => stackBottom("Taguig City", "Market Market")} >
                    <Image source={Market_Market_logo} style={styles.McdoImageStyle}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.RestoName}>Market Market</Text>
                        <Text>McKinley Pkwy, Taguig, 1630 Metro Manila</Text>
                        <Text style={{ marginTop: 10 }}>5 ⋆⋆⋆⋆⋆</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.WhitePanel}

                    onPress={() => stackBottom("Taguig City", "Uptown Mall BGC")} >
                    <Image source={Uptown_logo} style={styles.McdoImageStyle}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.RestoName}>Uptown Mall BGC</Text>
                        <Text>36th Street, 9th Ave, Taguig, Metro Manila</Text>
                        <Text style={{ marginTop: 10 }}>5 ⋆⋆⋆⋆⋆</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

    const ModalContent = () => {
        return (
            <>
                <Header>Do you want to Logout?</Header>
            </>
        );
    };

    return (
        <View style={{ width, height }}>
            <View style={styles.container}>

                {/* <TouchableOpacity style={{ alignItems: "left" }} onPress={() => showTab()}>
                    <Image source={settings_logo} style={{ width: 40, height: 40 }} />
                </TouchableOpacity> */}

                {/* //TO-DO: Modal Section */}
                <ModalComponent
                    label={<Image source={settings_logo} style={{ width: 40, height: 40 }} />}
                    header="Settings"
                    content={<ModalContent />}
                    navigation={navigation}
                />



                <View style={{ marginBottom: 275, alignItems: 'center', justifyContent: 'center', }}>

                    <Image source={logo} style={{ marginBottom: 20, width: 100, height: 120, shadowOpacity: 0.2, shadowColor: "#000", shadowOffset: { width: 4, height: 6 } }} />

                    <Text style={{ fontSize: 35, color: "#fff", fontWeight: '100' }}>Welcome to</Text>
                    <Text style={{ fontSize: 35, color: "#fff", fontWeight: '100' }}>iNavigate</Text>

                    {/* Clickable Bottom Sheet */}
                    <BottomSheet hasDraggableIcon ref={bottomSheet} height={350}>
                        <ScrollView style={styles.ScrollView}>
                            <View> {array} </View>
                        </ScrollView>
                    </BottomSheet>
                    {cityError &&
                        <Message negative >
                            <Message.Header>Please choose a city</Message.Header>
                            <p>Chosen city is blank</p>
                        </Message>
                    }

                    {/* Dropdown list */}
                    <Dropdown
                        style={{ width: width / 1.5, marginTop: 20 }}
                        placeholder='Select City'
                        fluid
                        search
                        selection
                        onChange={(e, { value }) => setCity(value)}
                        options={countryOptions}
                    />

                    {/* Proceed Button */}
                    <TouchableOpacity
                        style={{ marginTop: 20, marginLeft: 175, height: 30, width: 100, backgroundColor: "#333180", borderRadius: 5, alignItems: 'center', justifyContent: "center", }}
                        onPress={() => goToScreen("SearchMallScreen")}
                    >
                        <Text style={{ fontWeight: "300", color: "#fff" }}> PROCEED </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ position: "fixed", bottom: 0, height: "40px", left: 0, right: 0, }}>
                    <TouchableOpacity onPress={() => bottomSheet.current.show()} style={styles.popular_malls}>
                        <Text style={styles.text}>POPULAR MALLS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => bottomSheet.current.show()}
                    >
                        <View style={styles.grabber}></View>

                    </TouchableOpacity>
                </View>
            </View >
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: width,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {
            height: -3,
            width: 0,
        },
        shadowRadius: 5,
        top: 0,

    },
    text: {
        color: "white",
        fontWeight: "bold",
    },
    subContainer: {

        backgroundColor: '#f2f2f2',
        paddingTop: 10,
        marginTop: 85,
        marginHorizontal: 40,
        borderRadius: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        shadowColor: "#4579ae",
        shadowOffset: { width: 9, height: 9 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
    },
    settingsContainer: {
        position: 'absolute',
        top: 0,
        left: 0, right: 0, bottom: 0,

    },
    itemView: {
        // marginHorizontal: '10%',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingLeft: 5,
        height: 80,
        width: '90%',
        marginBottom: 10,
        borderRadius: 4,
        // flex: 1,
        // flexDirection: "row"
    },
    MainView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#4579ae",
        padding: 20,
    },
    grabber: {
        width: 40,
        borderTopWidth: 6,
        borderTopColor: "#aaa",
        borderRadius: 20,
        alignSelf: "center",
    },
    popular_malls: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#73a3d3",
        width: 150,
        height: 35,
        position: "absolute",
        left: 20,
        top: -35,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    WhitePanel: {
        height: 125,
        width: 380,
        borderRadius: 15,
        marginBottom: 15,
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

export default Screen1