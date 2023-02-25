import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { commonStyle } from "./CommonStyle";
import PressableButton from "./PressableButton";

export default function Input({ backToHomeHandle }) {
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

  function sendInformation() {
    backToHomeHandle(calories, description);
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
        <PressableButton
          customizedStyle={{ borderRadius: 5 }}
          buttonPressed={resetInformation}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </PressableButton>
        <PressableButton
          customizedStyle={{ borderRadius: 5 }}
          buttonPressed={sendInformation}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, paddingTop: 70 },
  text: {
    color: "rgb(64,70,146)",
    fontWeight: "bold",
    fontSize: 17,
  },
  rowContainer: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  smallTextContainer: {
    backgroundColor: "rgb(152,152,221)",
    borderRadius: 5,
    height: 30,
    width: 280,
    padding: 2,
  },
  bigTextContainer: {
    backgroundColor: "rgb(152,152,221)",
    borderRadius: 5,
    height: 180,
    width: 280,
    padding: 2,
  },
});
