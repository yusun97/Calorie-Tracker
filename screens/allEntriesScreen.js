import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Card from "../components/Card";
import EntriesList from "../components/EntriesList";

export default function AllEntriesScreen({ navigation }) {
  function mealPressedHandle(mealEntry) {
    navigation.navigate("EditEntries", {
      type: "allEntries",
      editedMeal: mealEntry,
    });
  }

  return (
    <View style={commonStyle.generalContainer}>
      <EntriesList mealPressed={mealPressedHandle} />
    </View>
  );
}
