import React, { Component } from "react";
import {
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View, // Container component
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "./Swiper";

export default function WelcomeScreen({ navigation }) {
  return (
    <Swiper navigation={navigation}>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: "#FFFFFF" }]}>
        <Ionicons name="ios-barcode" {...iconStyles} />
        <Text style={styles.header}>WILLKOMMEN</Text>
        <Text style={styles.text}>Willkommen auf der geilen mPOS APP</Text>
      </View>
      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: "#FFFFFF" }]}>
        <Ionicons name="ios-barcode" {...iconStyles} />
        <Text style={styles.header}>BARCODE</Text>
        <Text style={styles.text}>
          Produkt scannen und direkt online bezahlen
        </Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: "#FFFFFF" }]}>
        <Ionicons name="ios-list" {...iconStyles} />
        <Text style={styles.header}>LISTE</Text>
        <Text style={styles.text}>
          Einkaufliste erstellen und effizient bezahlen
        </Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: "#FFFFFF" }]}>
        <Ionicons name="md-cash" {...iconStyles} />
        <Text style={styles.header}>BELEGE</Text>
        <Text style={styles.text}>Kassenbelege speichern</Text>
        <Button
          title="blabla"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </Swiper>
  );
}
const iconStyles = {
  size: 150,
  color: "#8A8F9E"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center" // Center horizontally
  },
  // Header styles
  header: {
    color: "#8A8F9E",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#8A8F9E",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  }
});
