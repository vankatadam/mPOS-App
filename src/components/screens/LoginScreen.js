import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native";

// Firebase Import
import * as firebase from "firebase";

 export default class LoginScreen extends React.Component {
  state = {
      email: "",
      password: "",
      errorMessage: null
  };

  onLoginPressed = () => {
      const { email, password } = this.state;
    
        //TESTAUSGABE DER LOGINDATEN => DELETE BEFORE PUBLISHING
        console.log({email, password});

      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(error => this.setState({ errorMessage: error.message }));
  };
  
  onResetPasswordPressed = () => {
      const { email, password } = this.state;

      if (email !== null) {
        firebase
        .auth()
        .sendPasswordResetEmail(email)
        .catch(error => this.setState({ errorMessage: error.message }));
      } else {
          alert("Geben Sie Ihre Email-Adresse ein!");
      } 
  }
  

  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.greeting}>{`Hello again.\nWelcome back.`}</Text>

              <View style={styles.errorMessage}>
                  {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
              </View>

              <View style={styles.form}>
                  <View>
                      <Text style={styles.inputTitle}>Email Address</Text>
                      <TextInput
                          style={styles.input}
                          autoCapitalize="none"
                          onChangeText={email => this.setState({ email })}
                          value={this.state.email}
                      ></TextInput>
                  </View>

                  <View style={{ marginTop: 32 }}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput
                          style={styles.input}
                          secureTextEntry
                          autoCapitalize="none"
                          onChangeText={password => this.setState({ password })}
                          value={this.state.password}
                      ></TextInput>
                  </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={this.onLoginPressed}>
                  <Text style={{ color: "#FFF" }}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{ alignSelf: "center", marginTop: 32 }}
                  onPress={() => this.props.navigation.navigate("Register")}
              >
                  <Text style={{ color: "#414959", fontSize: 13 }}>
                      New to ScanIIS App? <Text style={{ fontWeight: "500", fontStyle: "italic", color: "orange" }}>Sign Up</Text>
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{ alignSelf: "center", marginTop: 32 }}
                  
              >
                  <Text style={{ color: "#414959", fontSize: 13 }}>
                      Forgot Password? <Text style={{ fontWeight: "500", fontStyle: "italic", color: "orange" }}>Reset it here!</Text>
                  </Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  greeting: {
      marginTop: 32,
      fontSize: 18,
      fontWeight: "400",
      textAlign: "center"
  },
  errorMessage: {
      height: 72,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 30
  },
  error: {
      color: "#E9446A",
      fontSize: 13,
      fontWeight: "600",
      textAlign: "center"
  },
  form: {
      marginBottom: 48,
      marginHorizontal: 30
  },
  inputTitle: {
      color: "#8A8F9E",
      fontSize: 10,
      textTransform: "uppercase"
  },
  input: {
      borderBottomColor: "#8A8F9E",
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: "#161F3D"
  },
  button: {
      marginHorizontal: 30,
      backgroundColor: "orange",
      borderRadius: 20,
      height: 52,
      alignItems: "center",
      justifyContent: "center"
  }
});