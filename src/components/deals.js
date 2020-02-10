import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function deals(props) {
  const src = props.src;
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <View>
        <View style={styles.item}>
          <Image source={props.src} style={{ width: 250, height: 200 }} />
          <Text style={styles.itemTitle}>{props.title}</Text>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </View>
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
    flexDirection: "column",
    padding: 16
  },
  itemText: {
    alignSelf: "center",
    fontSize: 20,
    color: "#ff6600"
  },
  itemTitle: { alignSelf: "center", fontSize: 16 }
});
