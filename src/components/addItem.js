import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./screens/Button";

export default function AddItem({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="Artikel..."
        onChangeText={changeHandler}
      />
      <Button
        styleButton={styles.button}
        onPress={() => submitHandler(text)}
        text="Artikel hinzufügen"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "90%"
  },
  button: {
    width: "90%"
  }
});
