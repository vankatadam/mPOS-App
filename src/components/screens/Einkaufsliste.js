import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";
import { FlatList } from "react-native-gesture-handler";
import EinkaufslisteItem from "../EinkaufslisteItem";
import { setLightEstimationEnabled } from "expo/build/AR";
import AddItem from "../addItem";
import MainHeader from "../MainHeader";

export default function Einkaufsliste() {
  const [todos, setTodos] = useState([
    { text: "Add Item", key: "1" },
    { text: "Delete me", key: "2" },
    { text: "Test", key: "3" }
  ]);
  const presshandler = item => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != item.key);
    });
  };
  const submitHandler = text => {
    if (text.length > 1) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "Error",
        "Lebensmittel der Einkaufsliste müssen mindestens einen Buchstaben enthalten",
        [{ text: "Verstanden", onPress: () => console.log("alert closed") }]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader text="Einkaufsliste" />
      <View style={styles.content}>
        <AddItem submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <EinkaufslisteItem item={item} presshandler={presshandler} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 0,
    backgroundColor: "#fff",
    flex: 1
  },
  content: {
    padding: 20,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  },
  header: {
    backgroundColor: "#fff0e6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    width: "100%"
  },
  headerText: {
    color: "#ff6600",
    fontSize: 20,
    paddingTop: 34,
    paddingBottom: 6,
    fontWeight: "bold"
  }
});
