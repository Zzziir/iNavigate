import React, { useRef, useEffect, Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Animated, Dimensions } from 'react-native';

//Screens after splash
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import SearchMallScreen from './screens/SearchMallScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchShopScreen from './screens/SearchShopScreen';
import example from './screens/example';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'semantic-ui-css/semantic.min.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'

//Pictures and Logos
import splashPic from './assets/logo2_2.png';

const Stack = createStackNavigator();

function splashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace('LoginScreen'); // Stack Name
  }, 10);
  //Para mabago yung tagal ng splash screen, baguhin niyo yang 10
  //default is 5000

  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2500,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <View
      style={{
        backgroundColor: '#517192',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Animated.Image source={splashPic} style={{ width: 200, height: 220, opacity: fadeAnim }} />

      <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
        <Text style={[styles.logoText]}>i</Text>
        <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
          Navigate
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="splash_Screen"
          component={splashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="SearchMallScreen" component={SearchMallScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="SearchShopScreen" component={SearchShopScreen} />
        <Stack.Screen name="example" component={example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#52b372',
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: 'white',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flexDirection: 'row',
  },
});