import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import { commonStyle, lightPurple, darkPurple, white } from "./CommonStyle";
import PressableButton from "./PressableButton";

export default function Input({ mealEntered }) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  function changeCalories(changedCalories) {
    setCalories(changedCalories);
  }

  function changeDescription(changedDescription) {
    setDescription(changedDescription);
  }

  function resetInformation() {
    setCalories("");
    setDescription("");
  }

  function validate() {
    if (
      calories < 0 ||
      calories.length === 0 ||
      isNaN(calories) ||
      description.length === 0
    ) {
      Alert.alert("Invalid input", "Please check your input values", [
        { text: "OK", style: "cancel" },
      ]);
    } else {
      sendInformation();
    }
  }

  function sendInformation() {
    mealEntered(calories, description);
    resetInformation();
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Calories</Text>
        <TextInput
          value={calories}
          onChangeText={changeCalories}
          style={styles.smallTextContainer}
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.text}>Description</Text>
        <TextInput
          value={description}
          onChangeText={changeDescription}
          style={styles.bigTextContainer}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PressableButton buttonPressed={resetInformation}>
          <Text style={styles.buttonText}>Reset</Text>
        </PressableButton>
        <PressableButton buttonPressed={validate}>
          <Text style={styles.buttonText}>Submit</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 70,
    margin: 10,
  },
  text: {
    color: darkPurple,
    fontWeight: "bold",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  smallTextContainer: {
    backgroundColor: lightPurple,
    borderRadius: 5,
    height: 30,
    width: 200,
  },
  bigTextContainer: {
    backgroundColor: lightPurple,
    borderRadius: 5,
    height: 160,
    width: 200,
  },
});
