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

export default function Zahlungsarten() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader text="Zahlungsarten" />
      <Text style={styles.text}>
        Hier können Sie Zahlungsarten hinzufügen und verwalten.
      </Text>
      <View style={styles.panel}>
        <View style={styles.titel}>
          <Image
            source={require("../../../assets/master.png")}
            style={{ width: 45, height: 45, marginHorizontal: 6 }}
          ></Image>
          {/* <Ionicons name="md-card" size={45} style={styles.icon} /> */}
          <Text style={styles.titelText}>Kreditkarte</Text>
        </View>
        <Text style={styles.text}>****1234</Text>
        <Text style={styles.text}>Gültig bis 09.20</Text>
        <Button
          text="bearbeiten"
          styleButton={{
            marginVertical: 50,
            width: 200,
            alignSelf: "center"
          }}
        />
      </View>
      <View style={styles.panel}>
        <View style={styles.titel}>
          <Image
            source={require("../../../assets/paypal.png")}
            style={{ width: 45, height: 45, marginHorizontal: 3 }}
          ></Image>
          {/* <Ionicons name="md-cash" size={45} style={styles.icon} /> */}
          <Text style={styles.titelText}>Paypal</Text>
        </View>
        <Text style={styles.text}>Max@Mustermann.de</Text>
        <Button
          text="bearbeiten"
          styleButton={{
            marginVertical: 75,
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
