
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
  FlatList
} from "react-native";


export default function JourneyDetails({navigation}) {
    console.log("bus no: ",busno);
    console.log("from: ",from);
    console.log("to: ",to);
    
    const onPress = () => {
      global.status = "active";
        navigation.navigate("JourneyDetail")
    };
    const [option, setOption] = useState(null);
  const data = [
    { value: 'Sheffield Interchange to Medowhall' },
    { value: 'Medowhall to Sheffield Interchange' },
    
  ];
    return (
<View>
<Text style={styles.text}>Bus no : {busno}</Text>

<Text style={styles.text}>{from} to {to}</Text>

<TouchableOpacity 
style={styles.button}
onPress={onPress}>
  <Text>START</Text>
</TouchableOpacity>

</View>

    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
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
        backgroundColor: "red",
        padding: 25,
        margin:20
      },
      text:{
        fontSize:25,
        padding:20,
        margin: 20
      }

  });
