import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { screenWidth } from "./screenWidth";

export default function MainHeader(props) {
  const selectedShop = useSelector(state => state.shops.selectedShop);
  const loggedUser = useSelector(state => state.shops.loggedUser);

  var logo;
  if (selectedShop === "Edeka") {
    logo = require("../../assets/Logo_Edeka.png");
  }
  if (selectedShop === "Aldi_Sued") {
    logo = require("../../assets/Logo_Aldi_Sued.png");
  }
  if (selectedShop === "Lidl") {
    logo = require("../../assets/Logo_Lidl.png");
  }

  return (
    <View style={[styles.header, props.styleHeader]}>
      <Image style={styles.logo} source={logo} />

      <Text style={[styles.headerText, props.styleHeaderText]}>
        {[props.text]}
      </Text>

      <Text style={styles.loggedUser}>{loggedUser}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff0e6",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    flexDirection: "row"
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginBottom: 4,
    position: "absolute",
    left: 6,
    bottom: 0
  },
  headerText: {
    color: "#ff6600",
    fontSize: 20,
    paddingTop: 34,
    paddingBottom: 6,
    fontWeight: "bold"
  },
  loggedUser: {
    marginBottom: 4,
    position: "absolute",
    right: 2,
    bottom: 0,
    width: 80,
    textAlign: "center",
    color: "#ff6600"
  }
});
