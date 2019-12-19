import React from "react";
import ReactNative, { StyleSheet, Dimensions, View, Text } from "react-native";
import { screenWidth } from "./screenWidth";

/**
 *
 * @param {*} propstest string
 */
export default function TutorialView(props) {
  return (
    <View style={styles.viewStartScreen}>
      {props.children}
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center"
  },
  viewStartScreen: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center"
  }
});
