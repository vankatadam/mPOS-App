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

export default function Kasse({ route, navigation }) {
  const { warenkorb } = route.params;
  const { totalPrice } = route.params;
  return (
    <SafeAreaView>
      <MainHeader text="Kasse" />
    </SafeAreaView>
  );
}
