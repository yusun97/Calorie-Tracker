import { View, Text, ViewBase, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import MealItem from "../components/MealItem";
import EntriesList from "../components/EntriesList";
import { useState } from "react";

export default function OverLimitEntriesScreen({ navigation }) {
  // let mealEntry = { description: "breakfast", calories: 800 };
  const [entries, setEntries] = useState([
    { description: "banana", calories: "400" },
    { description: "apple", calories: "500" },
    { description: "kiwi", calories: "600" },
    { description: "orange", calories: "700" },
    { description: "pineapple", calories: "800" },
    { description: "banana", calories: "400" },
    { description: "apple", calories: "500" },
    { description: "kiwi", calories: "600" },
    { description: "orange", calories: "700" },
    { description: "pineapple", calories: "800" },
  ]);

  function mealPressedHandle() {
    navigation.navigate("EditEntries");
  }

  return (
    <View style={commonStyle.generalContainer}>
      {/* <MealItem mealEntry={mealEntry} onMealPressed={mealPressed} /> */}
      <EntriesList mealPressed={mealPressedHandle} entriesShown={entries} />
    </View>
  );
}
