import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";
import Button from "./Button";
import MainHeader from "../MainHeader";

export default function MeineFiliale() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader text="Meine Filiale" />
      <Text style={styles.text}>
        Hier können Sie ihre gespeicherte Filialen sehen:
      </Text>
      <View style={styles.panel}>
        <View style={styles.titel}>
          <Image
            source={require("../../../assets/Logo_Edeka.png")}
            style={{
              width: 60,
              height: 60,
              margin: 6,
              resizeMode: "contain"
            }}
          ></Image>
          {/* <Ionicons name="md-card" size={45} style={styles.icon} /> */}
          <Text style={styles.titelText}>Edeka</Text>
        </View>
        <Button
          text="auswählen"
          styleButton={{
            marginVertical: 10,
            width: 200,
            alignSelf: "center"
          }}
        />
      </View>

      <View style={styles.panel}>
        <View style={styles.titel}>
          <Image
            source={require("../../../assets/Logo_Lidl.png")}
            style={{
              width: 60,
              height: 60,
              margin: 6,
              resizeMode: "contain"
            }}
          ></Image>
          {/* <Ionicons name="md-card" size={45} style={styles.icon} /> */}
          <Text style={styles.titelText}>Edeka</Text>
        </View>
        <Button
          text="auswählen"
          styleButton={{
            marginVertical: 10,
            width: 200,
            alignSelf: "center"
          }}
        />
      </View>

      <View style={styles.panel}>
        <View style={styles.titel}>
          <Image
            source={require("../../../assets/Logo_Aldi_Sued.png")}
            style={{
              width: 60,
              height: 60,
              margin: 6,
              resizeMode: "contain"
            }}
          ></Image>
          {/* <Ionicons name="md-card" size={45} style={styles.icon} /> */}
          <Text style={styles.titelText}>Edeka</Text>
        </View>
        <Button
          text="auswählen"
          styleButton={{
            marginVertical: 10,
            width: 200,
            alignSelf: "center"
          }}
        />
      </View>
      <TouchableOpacity>
        <Ionicons name="ios-add-circle" size={80} style={styles.button} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  panel: {
    backgroundColor: "white",
    borderColor: "#FFF0E6",
    borderWidth: 1,
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 6,
    flex: 1
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: 5,
    marginLeft: 5
  },
  icon: {
    paddingHorizontal: 15,
    color: "#ff6600"
  },
  titel: { flexDirection: "row", alignItems: "center" },
  titelText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 15
  },
  button: {
    marginVertical: 20,
    alignSelf: "center",
    color: "#ff6600"
  }
});
