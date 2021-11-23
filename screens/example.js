import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

import sourceImages from '../constants/malls';


const example = ({ navigation }) => {
    const [imageSrc, setImageSrc] = useState("Image1");
    return (
        <>
            <h1>hello</h1>
            <button onClick={() => setImageSrc("Image1")}>Image1</button>
            <button onClick={() => setImageSrc("Image2")}>Image2</button>
            <button onClick={() => setImageSrc("Image3")}>Image3</button>
            <Image style={{ height: 400, width: 200 }} source={sourceImages.find(img => imageSrc === img.name).src || sourceImages[0].src} />
        </>

    );
}

export default example;