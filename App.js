import React, { useState, useCallback } from "react";

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from "react-native";

import { NavigationNativeContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  StackCardAnimationContext
} from "@react-navigation/stack";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

//Import der Login-/Register-Screens

import LoginScreen from "./src/components/screens/LoginScreen";

import RegisterScreen from "./src/components/screens/RegisterScreen";

// ---------------------------------

import WelcomeScreen from "./src/components/screens/WelcomeScreen";

import HomeScreen from "./src/components/screens/HomeScreen";

import Warenkorb from "./src/components/screens/Warenkorb";

import Weiteres from "./src/components/screens/Weiteres";

import Einkaufsliste from "./src/components/screens/Einkaufsliste";

import Kasse from "./src/components/screens/Kasse";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

//Firebase Import

import * as firebase from "firebase";

const Stack = createStackNavigator();

//---------- Database Connection Start ----------

var firebaseConfig = {
  apiKey: "AIzaSyBACmie-LjmzgzCxD-zS-sOZCJB5uof3YU",

  authDomain: "mpos-7ce61.firebaseapp.com",

  databaseURL: "https://mpos-7ce61.firebaseio.com",

  projectId: "mpos-7ce61",

  storageBucket: "mpos-7ce61.appspot.com",

  messagingSenderId: "752966429225",

  appId: "1:752966429225:web:727812a22ba0ad5721ca38",

  measurementId: "G-KKZNDY8S6J"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

  console.log("Verbindung zu " + firebaseConfig.databaseURL + " hergestellt!");
} else {
  console.log(
    "Verbindung zu " + firebaseConfig.databaseURL + " besteht bereits!"
  );
}

//---------- Database Connection End -------------

//Untere Navigationsleiste

const Tab = createBottomTabNavigator();

const TabNavi = () => (
  <Tab.Navigator
    headerShown=""
    tabBarOptions={{
      activeTintColor: "#ff6600",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen
      name="Homepage"
      options={{
        tabBarIcon: () => <Ionicons name="ios-home" size={25} color="#ff6600" />
      }}
      component={HomeScreen}
    />

    <Tab.Screen
      name="Einkaufsliste"
      options={{
        tabBarIcon: () => <Ionicons name="ios-list" size={25} color="#ff6600" />
      }}
      component={Einkaufsliste}
    />

    <Tab.Screen
      name="Warenkorb"
      options={{
        tabBarIcon: () => <Ionicons name="md-cart" size={25} color="#ff6600" />
      }}
      component={Warenkorb}
    />

    <Tab.Screen
      name="Mehr"
      options={{
        tabBarIcon: () => <Ionicons name="ios-more" size={25} color="#ff6600" />
      }}
      //Hier ist normal
      component={Weiteres}

      //LoginScreen ist eingefügt zum Testen -> Weiterleitung zum RegisterScreen funktioniert noch nicht

      // component={LoginScreen}
    />
  </Tab.Navigator>
);

//Screens für die App

const AppStack = createStackNavigator({
  Home: HomeScreen,

  Liste: Einkaufsliste,

  Warenkorb: Warenkorb,

  Weiteres: Weiteres,
  Welcome: WelcomeScreen
});

//Screens für die Authentifizierung

const AuthStack = createStackNavigator({
  Login: LoginScreen,

  Register: RegisterScreen
});

//Screens für das Onboarding

const OnboardingStack = createStackNavigator({
  Onboarding: WelcomeScreen
});

/*

var appContainer = createAppContainer(

  createSwitchNavigator(

    {

      Onboarding: WelcomeScreen,

      App: AppStack,

      Auth: AuthStack

    },

    {

      initialRouteName: "Onboarding",

    },

  )

);

*/

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          options={({}) => ({
            headerShown: false
          })}
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={({}) => ({
            headerTitleAlign: "center",
            headerLeft: null
          })}
          name="Home"
          component={TabNavi}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} headerShown="true" />
        <Stack.Screen name="Kasse" component={Kasse} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
