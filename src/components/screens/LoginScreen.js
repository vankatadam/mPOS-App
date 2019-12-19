import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";


export default function LoginScreen() {
  

  return (
      <div>
      </div>
  );
}

//Registrieren eines Users
function registerUser() {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    var errorCode = error.errorCode;
    var errorMessage = error.errorMessage;
  })
};

//Einloggen des Users
function loginUser() {

};