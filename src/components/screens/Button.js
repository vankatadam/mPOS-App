/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from "react";
import {
  StyleSheet, // CSS-like styles
  Text, // Renders text
  TouchableOpacity, // Pressable container
  View // Container component
} from "react-native";

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, this.props.styleButton]}
      >
        <Text style={[styles.text, this.props.styleButtonText]}>
          {this.props.text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50, // Rounded border
    borderWidth: 1, // 2 point border widht
    borderColor: "#ff6600", // White colored border
    paddingHorizontal: 40, // Horizontal padding
    paddingVertical: 8, // Vertical padding
    backgroundColor: "#ff6600",
    bottom: 0,
    top: 0,
    left: 0,
    alignItems: "center"
  },
  // Button text
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});
