
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


export default function Home({navigation}) {

    const [text, onChangeText] = React.useState();
    const onPress = () => {
global.busno = text;
navigation.navigate("Journey")
    };

    // useEffect = (()=>{
            
    // },[]);
    return (
<View>


<Text style={styles.text}>Ready to begin?</Text>
<Text style={styles.text}>Please enter service Bus number</Text>

<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Bus service number"
        value={text}
      />

      {(text == '')? <Text></Text>:
      (<TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Submit</Text>
      </TouchableOpacity>)}
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
        backgroundColor: "#DDDDDD",
        padding: 10
      },
      text:{
        fontSize:30,
        padding:20,
        margin: 20
      }

  });
