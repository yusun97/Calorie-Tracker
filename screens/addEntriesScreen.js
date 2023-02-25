import { View, Text } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";
import { useState } from "react";

export default function AddEntriesScreen({ navigation }) {
  function backToHome(changedCalories, changedDescription) {
    console.log("inside" + changedCalories);
    console.log("inside" + changedDescription);
    navigation.navigate("Home", {
      calories: changedCalories,
      description: changedDescription,
    });
  }

  return (
    <View style={commonStyle.generalContainer}>
      <Input backToHomeHandle={backToHome} />
    </View>
  );
}
