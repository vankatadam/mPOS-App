import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screenWidth } from "./screenWidth";
import { Ionicons } from "@expo/vector-icons";

export default function EinkauslisteItem({ item, presshandler }) {
  return (
    <TouchableOpacity onPress={() => presshandler(item.key)}>
      <View style={styles.item}>
        <Ionicons name="ios-trash" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 10
  }
});
