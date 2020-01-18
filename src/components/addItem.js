import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./screens/Button";

export default function AddItem({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Artikel..."
        onChangeText={changeHandler}
      />
      <Button
        style={styles.button}
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
    borderBottomColor: "#ddd"
  },
  button: {
    marginHorizontal: 80
  }
});
