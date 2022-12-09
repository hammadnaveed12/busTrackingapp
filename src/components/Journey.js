import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import RadioButton from "./RadioButton";

export default function Journey({ navigation }) {
  console.log(busno);

  const onPress = () => {
    if (option == "Sheffield Interchange to Medowhall") {
      global.from = "Sheffield Interchange";
      global.to = "Medowhall";
    } else if (option == "Medowhall to Sheffield Interchange") {
      global.from = "Medowhall";
      global.to = "Sheffield Interchange";
    }

    navigation.navigate("JourneyDetails");
  };
  const [option, setOption] = useState(null);
  const data = [
    { value: "Sheffield Interchange to Medowhall" },
    { value: "Medowhall to Sheffield Interchange" },
  ];
  return (
    <View style={{ justifyContent: "center" }}>
      <Text style={styles.text}>GREAT Now select journey Direction</Text>

      <RadioButton data={data} onSelect={(value) => setOption(value)} />
      {/* <Text> Your option: {option}</Text> */}

      {option == null ? (
        <Text>Select any option</Text>
      ) : (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    margin: 40,
    backgroundColor: "#2596be",
  },
  text: {
    fontSize: 30,
    padding: 20,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
