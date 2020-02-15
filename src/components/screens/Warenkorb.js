import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import TutorialView from "../TutorialView";
import { Ionicons } from "@expo/vector-icons";
import { screenWidth } from "../screenWidth";
import Constants from "expo-constants";
import { withOrientation } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import { BarCodeScanner } from "expo-barcode-scanner";
import EinkaufslisteItem from "../EinkaufslisteItem";
import Button from "./Button";
import MainHeader from "../MainHeader";
import { useDispatch } from "react-redux";
import { loggedUser } from "../../store/actions/shops";

export default function Warenkorb({ navigation }) {
  //List Items
  const [warenkorb, setWarenkorb] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const presshandler = item => {
    setWarenkorb(prevWarenkorb => {
      return prevWarenkorb.filter(todo => todo.key != item.key);
    });
    var tmpPrice =
      Math.round((totalPrice - item.price + Number.EPSILON) * 100) / 100;
    setTotalPrice(tmpPrice);
  };

  const kasseHandler = navigation => {
    navigation.navigate("Kasse");
  };

  //end List Items

  //Beginning Scanner Code
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    var valid = false;
    for (var i = 0; i < dummyDB.length; i++) {
      if (dummyDB[i].id == data) {
        valid = true;
        var tmpPrice =
          Math.round((totalPrice + dummyDB[i].price + Number.EPSILON) * 100) /
          100;
        setTotalPrice(tmpPrice);
        setTotalPrice(tmpPrice);
        setWarenkorb(prevWarenkorb => {
          return [
            {
              key: Math.random().toString(),
              id: dummyDB[i].id,
              productName: dummyDB[i].productName,
              price: dummyDB[i].price
            },
            ...prevWarenkorb
          ];
        });
        break;
      }
    }
    if (valid == true) {
      alert(`${data} wurde abgescanned!`);
    } else {
      alert(
        `${data} existiert nicht. Versuchen sie es nochmal oder fragen sie einen Mitarbeiter`
      );
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  // ending scanner code

  //scanner Dummy Data
  const dummyDB = [
    {
      id: "Kaffee",
      productName: "Kaffee",
      price: 3.99
    },
    {
      id: "Milch",
      productName: "Milch",
      price: 0.99
    },
    {
      id: "Kopfsalat",
      productName: "Kopfsalat",
      price: 0.79
    }
  ];

  return (
    <View style={styles.container}>
      <MainHeader text="Warenkorb" styleHeader={{ width: "100%" }} />
      {/* scanner code beginning */}
      <View style={styles.scannerWrapper}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      </View>
      {scanned && (
        <Button
          text={"Nochmal scannen?"}
          onPress={() => setScanned(false)}
          styleButton={{ width: 280, marginTop: 8 }}
        />
      )}
      {/* scanner code end*/}

      <View style={styles.searchBar}>
        <Ionicons name="ios-search" size={30} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Produkt suchen"
          placeholderTextColor="#999999"
        ></TextInput>
      </View>
      {/* Warenkorb*/}
      <FlatList
        style={styles.scrollContainer}
        data={warenkorb}
        renderItem={({ item }) => (
          <EinkaufslisteItem item={item} presshandler={presshandler} />
        )}
      />
      {/* Warenkorb end*/}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Gesamtpreis: {totalPrice}€</Text>
        <Button
          text={"Zur Kasse"}
          styleButton={{ width: 200 }}
          onPress={() => {
            navigation.navigate("Kasse", {
              warenkorb: warenkorb,
              totalPrice: totalPrice
            });
            setScanned(true);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#fff0e6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    width: "100%"
  },
  headerText: {
    color: "#ff6600",
    fontSize: 20,
    paddingTop: 34,
    paddingBottom: 6,
    fontWeight: "bold"
  },
  scrollContainer: {
    flex: 1
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8
  },
  icon: {
    padding: 5,
    color: "#ff6600"
  },
  textInput: {
    flex: 1,
    color: "black",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ff6600",
    backgroundColor: "white",
    textAlignVertical: "center",
    fontSize: 20,
    height: 40,
    marginRight: 5,
    paddingLeft: 6
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 16
  },
  footerText: {
    color: "#ff6600",
    fontSize: 16,
    marginVertical: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#ff6600",
    width: 160,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  scanner: {
    overflow: "hidden",
    width: 300,
    height: 400
  },
  scannerWrapper: {
    overflow: "hidden",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8
  }
});
