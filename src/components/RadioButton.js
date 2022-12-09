import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}
          >
            <Text style={styles.option}> {item.value} </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  unselected: {
    backgroundColor: "grey",
    padding: 10,
    margin: 20,
  },
  selected: {
    backgroundColor: "#2596be",
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
});
