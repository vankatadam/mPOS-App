import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";
import { FlatList } from "react-native-gesture-handler";
import EinkaufslisteItem from "../EinkaufslisteItem";
import { setLightEstimationEnabled } from "expo/build/AR";
import AddItem from "../addItem";

export default function Einkaufsliste() {
  const [todos, setTodos] = useState([
    { text: "Add Item", key: "1" },
    { text: "Delete me", key: "2" },
    { text: "Test", key: "3" }
  ]);
  const presshandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = text => {
    if (text.length > 1) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "Uppppppppppppsssssssss",
        "Elemente der Einkaufsliste müssen mindestens einen Buchstaben enthalten",
        [{ text: "Verstanden", onPress: () => console.log("alert closed") }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Einkaufsliste</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 36,
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
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#ff6600",
    height: 50
  }
});
