import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
} from 'react-native';
import shop_logos from '../constants/shop_logos';

//Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SearchDropDown2({ dataSource, navigation, onPress, setImageSrc, text, setText, setShop }) {

    let num = 0;

    const setImageAndText = (item) => {
        setImageSrc(item)
        setText("")
        setShop(item)
    }

    console.log(shop_logos);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            {text &&
                <View style={styles.subContainer}>
                    {
                        dataSource.length ?
                            dataSource.map(item => {
                                if (num++ < 6) {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => setImageAndText(item)}
                                            style={styles.itemView}>
                                            <View style={{ alignContent: "left" }}>

                                                <Text style={styles.itemText}>{item}</Text>
                                                <Text style={styles.description}>{shop_logos[item]?.floorDescription}</Text>

                                            </View>
                                            <View style={{ position: "absolute", left: 225, right: 0, top: 12 }}>
                                                <Image source={shop_logos[item]?.src} style={{ width: 60, height: 60, borderRadius: 5 }} />
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            })
                            :
                            <View
                                style={styles.noResultView}>
                                <Text style={styles.noResultText}>No search items matched</Text>
                            </View>
                    }
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '6.2%',
        left: 0, right: 0, bottom: 0,
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
    itemText: {
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9d9d9d',
    },
    description: {
        fontSize: 12,
        paddingHorizontal: 8,
        color: "gray"

    },

});