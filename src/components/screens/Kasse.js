import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import MainHeader from "../MainHeader";
import { Ionicons } from "@expo/vector-icons";
import EinkaufslisteItem from "../EinkaufslisteItem";
import { screenWidth } from "../screenWidth";
import Button from "./Button";

export default function Kasse({ route, navigation }) {
  //to be upgradet to redux
  const [warenkorbs, setWarenkorb] = useState([route.params]);
  const presshandler = item => {
    setWarenkorb(prevTodos => {
      return warenkorbs.filter(todo => todo.key != item.key);
    });
  };
  //end upgrade

  const { warenkorb } = route.params;
  const { totalPrice } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader text="Kasse" />
      <View style={styles.mainPart}>
        <Text style={styles.titleText}>Produkte im Warenkorb: </Text>
        <FlatList
          data={warenkorb}
          renderItem={({ item }) => (
            <EinkaufslisteItem item={item} presshandler={presshandler} />
          )}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.titleText}>
          Gesamtpreis:
          <Text style={styles.titleTextSmallerHighlight}> {totalPrice}€</Text>
        </Text>
        <Text style={styles.titleText}>Mögliche Bezahlmethoden:</Text>
        <View
          style={{
            flex: 0.66,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Ionicons name="md-cash" size={75} style={{}} />
        </View>
        <Button text={"Bezahlen"} styleButton={{ width: 200 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mainPart: { flex: 1, alignItems: "center" },
  titleText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 14,
    paddingBottom: 2
  },
  titleTextSmaller: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 15
  },
  titleTextSmallerHighlight: {
    color: "#ff6600",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 15
  },
  footer: { flex: 0.66, alignItems: "center" }
});
