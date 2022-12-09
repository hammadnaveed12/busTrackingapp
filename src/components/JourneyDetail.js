
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
import RadioButton from "./RadioButton";

export default function JourneyDetails({navigation}) {
    console.log("bus no: ",busno);
    console.log("from: ",from);
    console.log("to: ",to);
    console.log("status: ",status);
    const [value,setValue]=useState();
    
    const noService = () => {

        global.status="inactive"
        setValue("Not in Service")
        
    };
    const end =  () => {
        navigation.navigate("Home")
        global.status="active"
    };
    const [option, setOption] = useState(null);
  const data = [
    { value: 'Sheffield Interchange to Medowhall' },
    { value: 'Medowhall to Sheffield Interchange' },
    
  ];

  useEffect(()=>{
    setValue("Journey Active")
  },[])
    return (
<View>
<Text style={styles.text}>Bus no : {busno}</Text>

<Text style={styles.text}>{from} to {to}</Text>



{(status =="active")? (<Text style={{fontSize:50, color:"green",textAlign:"center",marginBottom:30}}> {value}</Text>):(<Text style={{fontSize:50, color:"red",textAlign:"center",marginBottom:30}}> {value}</Text>) }
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>

<Text style={styles.text}>Options</Text>


<TouchableOpacity 
style={styles.button}
onPress={noService}>
  <Text style={{color:"white",fontSize:25}}>NOT IN SERVICE</Text>
</TouchableOpacity>
  

    <TouchableOpacity 
style={styles.button}
onPress={end}>
  <Text style={{color:"white",fontSize:25}}>End Journey</Text>
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
        backgroundColor: "grey",
        color:'black',
        padding: 25,
        margin:20
      },
      text:{
        fontSize:25,
        padding:20,
        margin: 20
      }

  });
