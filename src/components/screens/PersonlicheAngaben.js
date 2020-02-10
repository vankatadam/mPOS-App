import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";
import Button from "./Button";
import MainHeader from "../MainHeader";

export default function Kundenservice() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader text="Persönliche Angaben" />
      <Text style={styles.text}>
        Hier können Sie Ihre persönlichen Daten ändern oder ergänzen.
      </Text>
      <View style={styles.panel}>
        <View style={styles.titel}>
          <Ionicons name="md-person" size={45} style={styles.icon} />
          <Text style={styles.titelText}>Persönliche Daten</Text>
        </View>
        <Text style={styles.text}>Namen:</Text>
        <Text style={styles.text}>E-Mail-Adresse:</Text>
        <Button
          text="bearbeiten"
          styleButton={{
            marginVertical: 16,
            width: 200,
            alignSelf: "center"
          }}
        />
      </View>
      <View style={styles.panel}>
        <View style={styles.titel}>
          <Ionicons name="ios-lock" size={45} style={styles.icon} />
          <Text style={styles.titelText}>Passwort ändern</Text>
        </View>
        <Text style={styles.text}>**********</Text>
        <Button
          text="ändern"
          styleButton={{
            marginVertical: 45,
            width: 200,
            alignSelf: "center"
          }}
        />
      </View>
      <View style={styles.panel}>
        <View style={styles.titel}>
          <Ionicons name="md-person" size={45} style={styles.icon} />
          <Text style={styles.titelText}>Kundenkonto löschen</Text>
        </View>
        <Text style={styles.text}>
          Bitte beachten Sie, dass Sie diese Aktion nicht widerrufen können!
        </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Kundenkonto löschen</Text>
        </TouchableOpacity>
      </View>
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
  linkText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#999999",
    marginLeft: 5,
    marginVertical: 15,
    textDecorationLine: "underline"
  }
});
