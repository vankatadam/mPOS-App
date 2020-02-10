import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Alert,
  Image
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import Button from "./Button";
// Firebase Import
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  resetStatesInForm = () => {
    this.setState({ email: "", password: "", errorMessage: "" });
  };

  onLoginPressed = () => {
    const { email, password } = this.state;

    //TESTAUSGABE DER LOGINDATEN => DELETE BEFORE PUBLISHING
    console.log({ email, password });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));

    //Zurücksetzen der Felder
    //this.setState({ email: "", password: ""});
  };

  //Currently not Working! Needs Fix!
  onResetPasswordPressed = () => {
    const { email } = this.state;

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      /*.then(
        Alert.alert(
          "Reset Password",
          "An Email to has been sent!",
          [{ text: "OK", onPress: this.resetStatesInForm() }],
          //Für Android:
          { onDismiss: this.resetStatesInForm() },
          //Android Ende
          { cancelable: true }
        )
      ) */
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../../assets/mPOS.jpg")}
          style={{ width: 75, height: 75, margin: 8, alignSelf: "center" }}
        ></Image>
        <Text style={styles.greeting}>{`Willkommen zurück!`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>E-Mail-Adresse:</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Passwort:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>

        <Button
          text="einloggen"
          styleButton={{
            marginVertical: 16,
            width: 200,
            alignSelf: "center"
          }}
        />

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: "#999999", fontSize: 13 }}>
            Neu bei mPOS?{" "}
            <Text
              style={{
                fontWeight: "500",
                fontStyle: "italic",
                color: "#FF6600"
              }}
            >
              jetzt registrieren!
            </Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.onResetPasswordPressed()}
        >
          <Text style={{ color: "#999999", fontSize: 13 }}>
            Passwort vergessen?{" "}
            <Text
              style={{
                fontWeight: "500",
                fontStyle: "italic",
                color: "#FF6600"
              }}
            >
              Passwort zurücksetzen!
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF6600"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#999999",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "black",
    fontSize: 20,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#999999",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 20,
    color: "black"
  }
});
