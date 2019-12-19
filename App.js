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
import WelcomeScreen from "./src/components/screens/WelcomeScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import Warenkorb from "./src/components/screens/Warenkorb";
import Weiteres from "./src/components/screens/Weiteres";
import Einkaufsliste from "./src/components/screens/Einkaufsliste";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function App() {
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
          component={Weiteres}
        />
        <Tab.Screen name="Entry Debug" component={WelcomeScreen} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
