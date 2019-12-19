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
import WelcomeScreen from "./components/screens/WelcomeScreen";
import firebase from 'firebase';

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
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
console.log("Verbindung zur Datenbank " + firebaseConfig.databaseURL + " hergestellt!");
//---------- Database Connection End -------------

const Stack = createStackNavigator();

function App() {

  //Globale Flag für das Anzeigen des Onboardings, wird false nach einmaligem Anzeigen
  const flagOnboarding = true;

  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        {flagOnboarding && <Stack.Screen 
          options={{headerShown: false}}
          name={"Welcome Screen"}
          component={WelcomeScreen} />}
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
