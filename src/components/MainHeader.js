import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MainHeader(props) {
  return (
    <View style={[styles.header, props.styleHeader]}>
      {props.children}
      <Text style={styles.headerText}>
        {[props.text, props.styleHeaderText]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff0e6",
    alignItems: "flex-end",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    width: "100%",
    flexDirection: "row"
  },
  headerText: {
    color: "#ff6600",
    fontSize: 20,
    paddingTop: 34,
    paddingBottom: 6,
    fontWeight: "bold",
    flex: 1
  }
});
