import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function Weiteres({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mehr</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.moreFunction}>
          <Ionicons name="md-cart" size={50} style={styles.icon} />
          <Text style={styles.functionText}>Einkäufe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreFunction}>
          <Ionicons name="md-person" size={50} style={styles.icon} />
          <Text style={styles.functionText}>Persönliche Angaben</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreFunction}>
          <Ionicons name="md-card" size={50} style={styles.icon} />
          <Text style={styles.functionText}>Zahlungsarten</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreFunction}>
          <Ionicons name="md-locate" size={50} style={styles.icon} />
          <Text style={styles.functionText}>Meine Filiale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreFunction}>
          <Ionicons name="ios-chatbubbles" size={50} style={styles.icon} />
          <Text style={styles.functionText}>Kundenservice</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>einloggen</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#fff0e6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2"
  },
  headerText: {
    color: "#ff6600",
    fontSize: 20,
    paddingTop: 34,
    paddingBottom: 6,
    fontWeight: "bold"
  },
  menu: {
    flex: 1
  },
  moreFunction: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#fff0e6",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon: {
    paddingHorizontal: 20,
    color: "#ff6600"
  },
  functionText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 25
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: "#ff6600",
    width: 160,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30
  }
});
