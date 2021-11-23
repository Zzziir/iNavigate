import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, TextInput, Button, ImageBackground } from 'react-native';
import SearchDropDown2 from '../components/SearchDropDown2';
import sourceImages from '../constants/malls';
import backButton from '../assets/backButton.png';
import closeButton from '../assets/closeButton.jpg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Images

const SearchShopScreen = ({ navigation, route }) => {

    const { mallName } = route.params;

    const [dataSource] = useState(['Asics', 'AXN', 'Baleno', 'Banana Peel', 'Bata', 'Bench', 'Beverly Hills Polo Club', 'Bio Fresh', 'Blake Wings and Steak', 'Blk513', 'Burberry', 'Burlington', 'Chanel', 'City Lady', 'Coco Cabana', 'Coco Republic', 'Cold Stone Creamery', 'Concepts', 'Crocs', 'Darlington', 'Detail', 'Dohtonbori', 'Ecco', 'Elle', 'Fashion Amore', 'Fashion Forum', 'Figlia', 'Fila', 'Fisher Price', 'FJall Raven', 'Forever21', 'Forme', 'Frankies', 'Freeway', 'Genki Sushi', 'Gibi Shoes', 'Glamour', 'Grab', 'Gucci', 'Guess', 'Hello Kitty', 'Her Bench', 'Hush Hush', 'Jag', 'Jco', 'Jockey', 'Jollibee', 'Jovanni', 'JusTees', 'Kangaroo Jack', 'Karutora', 'Keds', 'Kentucky Fried Chicken', 'Kicks', 'Levis', 'Mang Inasal', 'Marugame Udon', 'McDonald', 'Mens Club', 'Mendez', 'Milanos', "Mini So", 'Nap', 'New Balance', 'Nike', 'Parisian', 'Penshoppe', 'Puffy and Sparky', 'Racks', 'Ramen Nagi', 'Rusty Lopez', 'Sbarro', 'Secosana', 'Sketchers', 'SM Basics', 'Soban KTown Grill', 'Starbucks', 'Tee Culture', 'Teppanya', 'Tim Ho Wan', 'Wagi Originals', 'World Balance', 'Xiaomi', 'Vivo',])
    const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', "#E8DEF3",
    ])
    const [filtered, setFiltered] = useState(dataSource)
    const [searching, setSearching] = useState(false)

    //Text Input
    const [text, setText] = useState("");
    const [shop, setShop] = useState("");

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

    const [imageSrc, setImageSrc] = useState("FirstFloor");

    const setImageFloor = (text) => {
        setImageSrc(text)
        setShop("")
    }

    return (
        <View style={styles.MainView}>

            <View style={styles.rectangle} >
                <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate('SearchMallScreen')}>
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
                    <SearchDropDown2
                        setImageSrc={setImageSrc}
                        setText={setText}
                        setShop={setShop}
                        text={text}
                        navigation={navigation}
                        onPress={() => setSearching(false)}
                        dataSource={filtered} />
                }

            </View>
            <View style={{ alignItems: "left" }}>
                <Text style={{ fontWeight: "100", fontSize: 16, marginLeft: 15, marginTop: 5, marginBottom: -5 }}>
                    Welcome to
                </Text>

                <Text style={{ fontWeight: "400", fontSize: 35, marginLeft: 15, marginBottom: -10 }}>
                    {mallName}
                </Text>

                {shop &&
                    <Text style={{ marginTop: 5, textAlign: "left", marginLeft: 15, width: 249, fontSize: 18, color: "#977bd0", fontWeight: "bold", fontStyle: "italic" }}> : {shop} </Text>
                }

                <Text style={{ color: 'gray', marginLeft: 15 }}>_________________________________________________________________
                </Text>
            </View>

            <View style={{ marginTop: 12, marginHorizontal: 15, backgroundColor: "#fff", width: windowWidth - 30, height: 450, borderColor: "#000", borderWidth: 1, borderRadius: 15, flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }} >
                    <View style={{ width: 50, height: 10, marginLeft: 15, marginTop: 15, marginBottom: 10 }} >
                        <TouchableOpacity
                            style={{ backgroundColor: "#c9c9c9", borderRadius: 10, width: 35, height: 25, }}
                            onPress={() => setImageFloor("ThirdFloor")}>
                            <Text style={{ opacity: 0.5, fontWeight: "100", fontSize: 16 }}>  3F</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 50, height: 10, marginLeft: 15, marginTop: 15, marginBottom: 10 }} >
                        <TouchableOpacity
                            style={{ backgroundColor: "#c9c9c9", borderRadius: 10, width: 35, height: 25 }}
                            onPress={() => setImageFloor("SecondFloor")}>
                            <Text style={{ opacity: 0.5, fontWeight: "100", fontSize: 16 }}>  2F</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 50, height: 10, marginLeft: 15, marginTop: 15, marginBottom: 10 }} >
                        <TouchableOpacity
                            style={{ backgroundColor: "#c9c9c9", borderRadius: 10, width: 35, height: 25, }}
                            onPress={() => setImageFloor("FirstFloor")}>
                            <Text style={{ opacity: 0.5, fontWeight: "100", fontSize: 16 }}>  GF</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {console.log(imageSrc)}
                <Image style={{ height: 510, width: 300, marginLeft: 60, marginRight: 20, marginTop: 15 }} source={sourceImages.find(img => imageSrc.replace(/ /g, '') === img.name).src || sourceImages[0].src} />
            </View>
            <View style={{ height: 20 }}></View>
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
        left: 350,
        right: 0,
        top: 38,
        bottom: 0,
    },
    closeButton: {
        height: 16,
        width: 16,
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

export default SearchShopScreen