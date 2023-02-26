import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase-setup";
import { writeToDBAll, writeToDBOver } from "../firebase/firebaseHelper";

export default function AddEntriesScreen({ navigation }) {
  const [limit, setLimit] = useState(500);

  function onMealEntered(changedCalories, changedDescription) {
    const newMeal = {
      calories: changedCalories,
      description: changedDescription,
    };
    writeToDBAll(newMeal);

    if (changedCalories > limit) {
      writeToDBOver(newMeal);
    }

    navigation.navigate("Home");
  }

  return (
    <View style={commonStyle.generalContainer}>
      <Input mealEntered={onMealEntered} />
    </View>
  );
}
