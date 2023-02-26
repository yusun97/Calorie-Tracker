import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";

export default function EntriesList({ entriesShown, mealPressed }) {
  return (
    <FlatList
      data={entriesShown}
      renderItem={({ item }) => {
        return <MealItem mealEntry={item} onMealPressed={mealPressed} />;
      }}
    />
  );
}
