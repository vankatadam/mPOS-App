import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { screenWidth } from "./screenWidth";

export default function MainHeader(props) {
  const selectedShop = useSelector(state => state.shops.selectedShop);

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
      <View styles={styles.leftContainer}>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "cover"
          }}
          source={logo}
        />
      </View>
      <Text style={[styles.headerText, props.styleHeaderText]}>
        {[props.text]}
      </Text>
      <View style={styles.rightContainer}>
        <Text>Logged User</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff0e6",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    flexDirection: "row"
  },
  headerText: {
    color: "#ff6600",
    fontSize: 20,
    paddingTop: 34,
    paddingBottom: 6,
    fontWeight: "bold"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "green"
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red"
  }
});
