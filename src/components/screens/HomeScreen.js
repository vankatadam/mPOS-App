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
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import Constants from "expo-constants";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import Deal from "../deals";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Kaffe jede Packung nur:",
    text: "3,99€!",
    src: require("../../../assets/Kaffee.jpg")
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Heute Milch für nur:",
    text: "0,99€!",
    src: require("../../../assets/Milch.jpeg")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Wochendeal! Kopfsalat für: ",
    text: "0,79€!",
    src: require("../../../assets/Salat.jpeg")
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/mPOS.jpg")}
        style={{ width: 75, height: 75, margin: 8 }}
      ></Image>
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
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Deal title={item.title} text={item.text} src={item.src} />
        )}
        style={{ marginBottom: 16 }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
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
