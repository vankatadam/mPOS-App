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
import MainHeader from "../MainHeader";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Am 11.02.2020",
    text: "39,99€",
    src: require("../../../assets/Logo_Edeka.png")
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Am 05.01.2020",
    text: "20,99€",
    src: require("../../../assets/Logo_Lidl.png")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Am 23.11.2019 ",
    text: "50,79€",
    src: require("../../../assets/Logo_Aldi_Sued.png")
  }
];

export default function Einkaufe() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader text="Einkäufe" />

      <Text style={styles.text}>
        Hier können Sie Ihre Einkäufe ansehen und verwalten.
      </Text>
      <View style={styles.searchBar}>
        <Ionicons name="ios-search" size={30} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="z.B. 11.02.2020"
          placeholderTextColor="#999999"
        ></TextInput>
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
    backgroundColor: "#fff"
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textInput: {
    marginRight: 5,
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
  },
  text: {
    fontSize: 20,
    color: "black",
    marginVertical: 5,
    marginLeft: 5
  }
});
