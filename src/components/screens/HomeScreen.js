import React, { useState, useCallback, Component } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  AppRegistry
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";

export default class HomeScreen   {
  
  render() {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>HomeScreen</Text>
    </View>
  );
}}
const styles = StyleSheet.create({});



AppRegistry.registerComponent("Home", () => HomeScreen);
