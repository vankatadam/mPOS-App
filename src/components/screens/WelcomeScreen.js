import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";

export default function WelcomeScreen() {
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
    } else {
      setActivePoint(3);
    }
  });

  return (
    <>
      <ScrollView
        style={styles.scrollView}
        {...propsForScrollview}
        onScroll={_onScroll}
        showsHorizontalScrollIndicator={false}
      >
        <TutorialView text="Produkt scannen und direkt online bezahlen">
          <Ionicons name="ios-barcode" size={150} />
        </TutorialView>
        <TutorialView text="Einkaufliste erstellen und effizient bezahlen">
          <Ionicons name="ios-list" size={150} />
        </TutorialView>
        <TutorialView text="Kassenbelege speichern">
          <Ionicons name="md-cash" size={150} />
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {},
  pointsView: {
    position: "absolute",
    bottom: 12,
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
    margin: 4
  },
  activePoint: {
    borderRadius: 6,
    backgroundColor: "rgba(55,55,55,0.8)",
    width: 12,
    height: 12,
    margin: 4
  }
});
