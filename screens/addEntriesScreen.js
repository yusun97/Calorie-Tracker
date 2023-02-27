import { View } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";
import { useState } from "react";
import { writeToDB } from "../firebase/firebaseHelper";

export default function AddEntriesScreen({ navigation }) {
  const [limit, setLimit] = useState(500);

  function onMealEntered(changedCalories, changedDescription) {
    if (changedCalories > limit) {
      const newMeal = {
        calories: changedCalories,
        description: changedDescription,
        review: false,
      };
      writeToDB(newMeal);
    } else {
      const newMeal = {
        calories: changedCalories,
        description: changedDescription,
        review: true,
      };
      writeToDB(newMeal);
    }
    navigation.navigate("Home");
  }

  return (
    <View style={commonStyle.generalContainer}>
      <Input mealEntered={onMealEntered} />
    </View>
  );
}
