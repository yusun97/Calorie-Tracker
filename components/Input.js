import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input() {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  function changeCalories(changedCalories) {
    setCalories(changedCalories);
  }

  function changeDescription(changedDescription) {
    setDescription(changedDescription);
  }

  return (
    <View>
      <View style={styles.rowContainer}>
        <Text>Calories</Text>
        <TextInput
          value={calories}
          onChangeText={changeCalories}
          style={styles.textContainer}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Description</Text>
        <TextInput
          value={description}
          onChangeText={changeDescription}
          style={styles.textContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: { flexDirection: "row", justifyContent: "center" },
  textContainer: {
    backgroundColor: "rgb(126,125,189)",
    borderRadius: 10,
    height: 200,
    width: 300,
  },
});
