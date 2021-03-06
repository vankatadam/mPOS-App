import React, { useState, useCallback, Component } from "react";

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  AsyncStorage
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import TutorialView from "../TutorialView";

import { Ionicons } from "@expo/vector-icons";

import { screenWidth } from "../screenWidth";

import Constants from "expo-constants";

import Button from "./Button";
import { NavigationNativeContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  StackCardAnimationContext
} from "@react-navigation/stack";
import { State } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function WelcomeScreen({ navigation }) {
  const propsForScrollview = {
    horizontal: true,

    pagingEnabled: true,

    snapToEnd: false
  };

  const [activePoint, setActivePoint] = useState(1);

  const _onScroll = useCallback(({ nativeEvent }) => {
    const newActivePoint = nativeEvent.contentOffset.x / screenWidth;

    //console.warn(nativeEvent.contentOffset.x);

    if (newActivePoint < 0.5) {
      setActivePoint(1);
    } else if (newActivePoint < 1.5) {
      setActivePoint(2);
    } else if (newActivePoint < 2.5) {
      setActivePoint(3);
    } else {
      setActivePoint(4);
    }
  });
  _enter = async () => {
    await AsyncStorage.setItem("isEnter", "1");
    navigation.navigate("Home");
  };
  return (
    <>
      <ScrollView
        style={styles.scrollView}
        {...propsForScrollview}
        onScroll={_onScroll}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBackground
          source={require("../../../assets/mPOSBackground.jpg")}
          style={styles.viewStartScreen}
        >
          <TutorialView text="Herzlich Willkommen">
            <Image
              source={require("../../../assets/mPOS.jpg")}
              style={styles.image}
            />
          </TutorialView>
        </ImageBackground>
        <TutorialView text="Produkt scannen und direkt online bezahlen">
          <Ionicons name="ios-barcode" {...iconStyles} />
        </TutorialView>

        <TutorialView text="Einkaufliste erstellen und effizient bezahlen">
          <Ionicons name="ios-list" {...iconStyles} />
        </TutorialView>

        <TutorialView
          text="Kassenbelege speichern"
          button="true"
          buttonOnPress={_enter}
          buttonStyle={styles.button}
        >
          <Ionicons name="md-cash" {...iconStyles} />
        </TutorialView>
      </ScrollView>

      <View style={styles.pointsView}>
        <View
          style={activePoint === 1 ? styles.activePoint : styles.point}
        ></View>

        <View
          style={activePoint === 2 ? styles.activePoint : styles.point}
        ></View>

        <View
          style={activePoint === 3 ? styles.activePoint : styles.point}
        ></View>
        <View
          style={activePoint === 4 ? styles.activePoint : styles.point}
        ></View>
      </View>
    </>
  );
}

const iconStyles = {
  size: 200,

  color: "#ff6600",
  alignItems: "center"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: Constants.statusBarHeight
  },

  scrollView: {},
  text: {
    fontSize: 30,
    textAlign: "center",

    color: "#000000"
  },
  pointsView: {
    position: "absolute",

    bottom: 30,

    flexDirection: "row",

    width: "100%",

    height: 15,

    justifyContent: "center"
  },

  point: {
    borderRadius: 6,

    backgroundColor: "rgba(55,55,55,0.2)",

    width: 12,

    height: 12,

    margin: 8
  },

  activePoint: {
    borderRadius: 6,

    backgroundColor: "#ff6600",

    width: 12,

    height: 12,

    margin: 8
  },
  image: {
    width: 140,
    height: 140,
    marginVertical: 30
  },
  viewStartScreen: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 100
  },
  button: { marginTop: 40 }
});
