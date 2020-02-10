import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";

//Firebase Import
import * as firebase from "firebase";
import Button from "./Button";

export default class RegisterScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null
  };

  onSignUpPressed = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../../assets/mPOS.jpg")}
          style={{ width: 75, height: 75, margin: 8, alignSelf: "center" }}
        ></Image>
        <Text style={styles.greeting}>{`Willkommen bei mPOS!`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Vollname:</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
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
          text="registrieren"
          styleButton={{
            marginVertical: 16,
            width: 200,
            alignSelf: "center"
          }}
          onPress={this.onSignUpPressed}
        />
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
