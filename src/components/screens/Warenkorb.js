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
import { withOrientation } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

export default function Warenkorb() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Warenkorb</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="ios-search" size={30} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder=" produkt suchen"
          placeholderTextColor="#999999"
        ></TextInput>
        <TouchableOpacity>
          <Ionicons name="ios-barcode" size={40} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {
          <Text style={styles.footerText}>
            Ihr Warenkorb ist zurzeit noch leer.
          </Text>
        }
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Gesamtpreis:0€</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Zur Kasse</Text>
        </TouchableOpacity>
      </View>
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
  scrollContainer: {
    flex: 1
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon: {
    padding: 5,
    color: "#ff6600"
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
  footer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 30
  },
  footerText: {
    color: "#ff6600",
    fontSize: 16,
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#ff6600",
    width: 160,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  }
});
