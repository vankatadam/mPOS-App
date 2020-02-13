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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <MainHeader text="Kundenservice" />
        <Text style={styles.text}>Wie können wir Ihnen helfen?</Text>
        <Text style={styles.text}>
          Schreiben Sie uns einfach eine Nachricht:
        </Text>
        <Text style={styles.text}>Betreff:</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.text}>Vorname:</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.text}>Nachname:</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.text}>Telefon:</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.text}>E-Mail-Adresse:</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.text}>Womit können wir Ihnen helfen?</Text>
        <TextInput style={styles.area}></TextInput>
        <Button
          text="senden"
          styleButton={{
            marginVertical: 16,
            width: 200,
            alignSelf: "center"
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: 5,
    marginLeft: 5
  },
  textInput: {
    color: "black",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ff6600",
    backgroundColor: "white",
    textAlignVertical: "center",
    fontSize: 20,
    marginHorizontal: 8,
    marginTop: 5,
    height: 40
  },
  area: {
    color: "black",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ff6600",
    backgroundColor: "white",
    textAlignVertical: "center",
    fontSize: 20,
    marginHorizontal: 8,
    marginTop: 5,
    height: 150
  }
});
