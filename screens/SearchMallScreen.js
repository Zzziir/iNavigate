import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchDropDown from '../components/SearchDropDown';

//Semantic UI
import { Dimmer, Loader, Segment, Image as ImageSrc } from 'semantic-ui-react'
import _ from 'lodash'
// import faker from 'faker'
import data from '../assets/data';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import AsyncStorage from "@react-native-async-storage/async-storage";

//Images
import logo from '../assets/logo2.png';
import UptownMall from '../assets/MallLogos/UptownMall.png'
import closeButton from '../assets/closeButton.jpg'

const Map = { uri: "https://cdn.discordapp.com/attachments/882878382679920722/909867400026005555/unknown.png" };
const SMnorthLogo = { uri: "https://static1.eyellowpages.ph/uploads/yp_business_photo/photo/504938/large_sm-north.png" };
const RobinsonsLogo = { uri: "https://logodix.com/logo/501988.png" };
const BGClogo = { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/BGC_Taguig_logo.svg/2081px-BGC_Taguig_logo.svg.png" };

//Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchMallScreen = ({ navigation }) => {
    const [city, setCity] = useState('');

    useEffect(() => {
        async function getStorage() {
            const city = await AsyncStorage.getItem('city');
            setTimeout(() => {
                setCity(city);
            }, 1000);
        }
        getStorage();
    }, []);

    let array = [];

    for (let i = 0; i < 1; i++) {
        array.push(
            <View>
                <TouchableOpacity style={styles.WhitePanel} onPress={() => navigation.navigate('SearchShopScreen', { mallName: "SM Aura" })} >
                    <Image source={SMnorthLogo} style={styles.MallImage} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.RestoName}>SM Aura</Text>
                        <Text>North Avenue, corner Epifanio de los Santos Ave</Text>
                        <Text>Open 10AM</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.WhitePanel} onPress={() => navigation.navigate('SearchShopScreen', { mallName: "Uptown Mall BGC" })} >
                    <Image source={UptownMall} style={styles.MallImage} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.RestoName}>Uptown Mall BGC</Text>
                        <Text>North Avenue, corner Epifanio de los Santos Ave</Text>
                        <Text>Open 10AM</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const [dataSource] = useState(['SM Aura', 'Market Market', 'Central Square', 'Uptown Mall'])
    const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', "#E8DEF3",])
    const [filtered, setFiltered] = useState(dataSource)
    const [searching, setSearching] = useState(false)
    const [text, setText] = useState("");

    const onSearch = (text) => {
        if (text) {
            setSearching(true)
            const temp = text.toLowerCase()
            setText(text);

            const tempList = dataSource.filter(item => {
                if (item.toLowerCase().match(temp) || item.toLowerCase().match(text))
                    return item
            })
            setFiltered(tempList)
        }
        else {
            setSearching(false)
            setFiltered(dataSource)
        }
    }

    return (
        <View style={styles.MainView}>
            {city ?
                <View>
                    <View style={styles.rectangle}>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>

                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.navigate('Screen1')}>
                                <Text style={{ fontSize: 22, marginLeft: 15, color: 'white' }}>🠔</Text>
                            </TouchableOpacity>

                            {/* //SearchBar */}
                            <TextInput
                                style={styles.textInput}
                                placeholder="Search"
                                value={text}
                                placeholderTextColor='black'
                                onChangeText={onSearch}
                            />

                            <TouchableOpacity
                                style={styles.closeButtonParent}
                                onPress={() => setText("")}
                            >
                                <Image
                                    style={styles.closeButton}
                                    source={closeButton}
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        </View>

                        {/* your components can stay here like anything */}
                        {/* and at the end of view */}
                        {
                            searching &&
                            <SearchDropDown
                                setText={setText}
                                navigation={navigation}
                                text={text}
                                onPress={() => setSearching(false)}
                                dataSource={filtered}
                            />
                        }

                    </View>
                    <Text style={{ color: 'gray', marginLeft: 15, marginTop: 10 }}>Your Location</Text>
                    <Text style={{ color: 'black', marginLeft: 15, marginTop: -10, fontSize: 36 }}>{city}</Text>
                    <Text style={{ color: 'gray', marginLeft: 15, marginTop: -10 }}>________________________________________________________________</Text>
                    <View>
                        <Image source={Map} style={{ height: 200, width: 550, marginTop: 10 }}></Image>
                    </View>
                    <Text style={{ color: 'gray', marginLeft: 15, marginTop: 10 }}>________________________________________________________________</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, marginLeft: 15 }}>Nearby Malls</Text>
                    <ScrollView style={{ flexWrap: 'wrap', marginTop: 10, marginBottom: 3, marginLeft: 15 }} >
                        <Text>{array}</Text>
                    </ScrollView>
                </View>
                :
                <Segment>
                    <Dimmer active inverted>
                        <Loader size='large'>Loading</Loader>
                    </Dimmer>

                    <ImageSrc src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        flexWrap: 'wrap',
    },
    closeButtonParent: {
        position: "absolute",
        left: -26,
        right: 0,
        top: 38,
        bottom: 0,
        zIndex: 999
    },
    closeButton: {
        height: 16,
        width: 16,
        zIndex: 999
    },
    rectangle: {
        alignItems: "center",
        justifyContent: "center",
        width: windowWidth,
        height: 80,
        backgroundColor: "#4579ae",
        zIndex: 999
    },
    backButton: {
        backgroundColor: '#739dc8',
        width: 50,
        height: 30,
        borderRadius: 7,
        marginTop: 30,
        marginLeft: 10,
        paddingBottom: 30
    },
    textInput: {
        marginTop: 30,
        backgroundColor: '#fff',
        width: windowWidth - 110,
        borderRadius: 7,
        height: 30,
        fontSize: 15,
        paddingHorizontal: 15,
        marginLeft: 15
    },

    SearchBar: {
        position: "absolute",
        right: 0,
        left: 0,
        margin: "20px 10px",
    },

    MallImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 12,
    },

    RestoName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 12
    },

    WhitePanel: {
        height: 110,
        width: windowWidth - 30,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "white"
    },
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        flex: 1
    },
});

export default SearchMallScreen