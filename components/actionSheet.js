import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Animated } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const ActionSheet = (props) => {

    const [alignment] = useState(new Animated.Value(0));

    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500
        }).start();
    }

    const hideTheActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500
        }).start();
    }

    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 2.4 + 50, 0]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    };

    const gestureHandler = (e) => {
        if (e.nativeEvent.contentOffset.y > 0) bringUpActionSheet();
        else if (e.nativeEvent.contentOffset.y < 0) hideTheActionSheet();
    }

    return (
        <Animated.View style={[styles.container, actionSheetStyle]}>

            <ScrollView
                onScroll={(e) => gestureHandler(e)}
                style={styles.grabber}>
            </ScrollView>

            <Text>ActionSheet</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: height / 2.4,
        width: width,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    grabber: {
        width: 60,
        borderTopWidth: 5,
        borderTopColor: "#aaa",
        alignSelf: "center",
        marginTop: 10,
    }
});

export default ActionSheet;