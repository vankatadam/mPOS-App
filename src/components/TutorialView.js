import React from "react";
import ReactNative, {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { screenWidth } from "./screenWidth";
import Button from "./screens/Button";

/**
 *
 * @param {*} propstest string
 */
export default function TutorialView(props) {
  return (
    <View style={styles.viewStartScreen}>
      {props.children}
      <Text style={styles.text}>{props.text}</Text>

      {props.button ? (
        <View style={props.buttonStyle}>
          <Button text="Los gehts!" onPress={props.buttonOnPress} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#000000"
  },
  viewStartScreen: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 100
  }
});
