import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screenWidth } from "./screenWidth";
import { Ionicons } from "@expo/vector-icons";

export default function EinkauslisteItem({ item, presshandler }) {
  return (
    <TouchableOpacity onPress={() => presshandler(item)}>
      <View style={styles.item}>
        <Ionicons name="ios-trash" size={18} color="#333" />
        <Text style={styles.itemText}>
          {item.text}
          {item.productName}
          {item.price != null ? " " + item.price + "€" : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 16,
    marginHorizontal: 8,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 10,
    color: "#000000",
    fontSize: 16
  }
});
