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
