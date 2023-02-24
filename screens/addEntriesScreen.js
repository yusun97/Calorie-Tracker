import { View, Text } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";
import { useState } from "react";

export default function AddEntriesScreen() {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  function changeCalories(changedCalories) {
    setCalories(changedCalories);
  }

  function changeDescription(changedDescription) {
    setDescription(changedDescription);
  }

  return (
    <View style={commonStyle.generalContainer}>
      <Input
        sendCalories={changeCalories}
        sendDescription={changeDescription}
      />
      <Text>
        receive {calories} and {description} in add entries screen
      </Text>
    </View>
  );
}
