import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "../database/firebase";
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

export default function JourneyDetails({ navigation }) {
  console.log("bus no: ", busno);
  console.log("from: ", from);
  console.log("to: ", to);
  const [busData, setBusData] = useState([]);
  
 
  const onPress = async () => {
    
    try {
      global.status = "active";
    
      await firebase.db.collection("busData").add({
        
        busNumber: busno,
        departure: from,
        destination:to, 
        busStatus : status
      });

      navigation.navigate("JourneyDetail",{
        userId: id,
      });
    } catch (error) {
      console.log(error)
    }

 
  };
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
   
  }, []);
 
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Text style={styles.textBold}>Bus no :</Text>
          <Text
            style={{
              fontSize: 30,
              padding: 10,
              color: "#2596be",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {busno}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.3 }}>
        {/* <Text style={styles.textBold}>Journey:</Text> */}
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 30,
              padding: 10,

              textAlign: "center",
            }}
          >
            {from}
          </Text>
          {/* <Text style={styles.text}>to</Text> */}
          <Text style={styles.text}>.</Text>
          <Text style={styles.text}>.</Text>
          <Text style={styles.text}>.</Text>
          <Text
            style={{
              fontSize: 30,
              padding: 10,

              textAlign: "center",
              color: "#2596be",
            }}
          >
            {to}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            START
          </Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#2596be",
    padding: 25,
    margin: 20,
    borderRadius: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 35,
    margin: -10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2596be",
  },
  textBold: {
    fontSize: 30,
    padding: 10,

    textAlign: "center",
    fontWeight: "bold",
  },
});
