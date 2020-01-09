import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import der Login-/Register-Screens
import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
// ---------------------------------

import WelcomeScreen from "./src/components/screens/WelcomeScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import Warenkorb from "./src/components/screens/Warenkorb";
import Weiteres from "./src/components/screens/Weiteres";
import Einkaufsliste from "./src/components/screens/Einkaufsliste";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Firebase Import
import * as firebase from 'firebase';

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
  console.log("Verbindung zur Datenbank fehlgeschlagen!!!");
} 

//---------- Database Connection End -------------

const Tab = createBottomTabNavigator();

function App() {
  //Globale Flag für das Anzeigen des Onboardings, wird false nach einmaligem Anzeigen
  const flagOnboarding = false;

  return (
    <NavigationNativeContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarIcon: () => <Ionicons name="ios-barcode" size={25} />
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Einkaufsliste"
          options={{
            tabBarIcon: () => <Ionicons name="ios-barcode" size={25} />
          }}
          component={Einkaufsliste}
        />
        <Tab.Screen
          name="Warenkorb"
          options={{
            tabBarIcon: () => <Ionicons name="ios-barcode" size={25} />
          }}
          component={Warenkorb}
        />
        <Tab.Screen
          name="Weiteres"
          options={{
            tabBarIcon: () => <Ionicons name="ios-barcode" size={25} />
          }}
          //Hier ist normal component={Weiteres}
          //LoginScreen ist eingefügt zum Testen -> Weiterleitung zum RegisterScreen funktioniert noch nicht
          component={LoginScreen}
        />
        <Tab.Screen name="Entry Debug" component={WelcomeScreen} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
