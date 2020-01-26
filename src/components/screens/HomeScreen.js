import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  AppRegistry,
  Button,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="ios-search" size={30} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Produkt suchen"
          placeholderTextColor="#999999"
        ></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("Warenkorb")}>
          <Ionicons name="ios-barcode" size={40} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 8,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  scanner: {
    overflow: "hidden",
    width: 260,
    height: 200
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "orange",
    borderRadius: 20,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textInput: {
    flex: 1,
    color: "black",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ff6600",
    backgroundColor: "white",
    textAlignVertical: "center",
    fontSize: 20,
    height: 40
  },
  icon: {
    padding: 5,
    color: "#ff6600"
  }
});
AppRegistry.registerComponent("Home", () => HomeScreen);
