import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import logo from '../assets/logo2_2.png';
import { auth } from '../firebase'

const RegisterScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                navigation.replace("LoginScreen")
            })
            .catch(error => alert(error.message));
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Screen1')}>
                    <Text style={{ fontSize: 22, marginLeft: 15, color: 'white' }}>🠔</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
                <Image source={logo} style={{ width: 140, height: 160 }} />
                <Text style={[styles.text, { marginTop: 10, marginBottom: 30, fontSize: 28, }]}>Enter your details</Text>
            </View>

            <View style={styles.inputTitle, {
                marginTop: 32,
                marginBottom: 8,
            }}>
                <Text style={styles.inputTitle}>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
            </View>

            <View style={styles.inputTitle, {
                marginTop: 32,
                marginBottom: 8,
            }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
                <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
            </View>

            <TouchableOpacity
                style={styles.submitContainer}
                onPress={handleSignUp}
            >
                <Text
                    style={[
                        styles.text,
                        {
                            color: "#FFF",
                            fontWeight: "600",
                            fontSize: 16
                        }
                    ]}
                >
                    Register
                </Text>
            </TouchableOpacity>

        </ScrollView >
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4e80b2",
        paddingHorizontal: 30
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
    text: {
        fontWeight: '100',
        color: "#fff"
    },
    socialButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8
    },

    submitContainer: {
        backgroundColor: "#684acd",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    inputTitle: {
        color: "#ABB4BD",
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: "#fff",
        fontSize: 14,
        fontWeight: '100',
    }
});

export default RegisterScreen;