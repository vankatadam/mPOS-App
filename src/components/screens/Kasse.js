import React from "react";
import {
  View,
  Text,
  FLatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import MainHeader from "../MainHeader";
import { Ionicons } from "@expo/vector-icons";

export default function Kasse() {
  return (
    <SafeAreaView>
      <MainHeader text="Kasse">
        <View style={{ flex: 1 }}>
          <Ionicons name="ios-arrow-back" size={25} color="#ff6600" />
        </View>
      </MainHeader>
    </SafeAreaView>
  );
}
