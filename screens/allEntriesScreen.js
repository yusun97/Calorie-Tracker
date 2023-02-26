import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
// import MealItem from "../components/MealItem";
import Card from "../components/Card";
import MealItem from "../components/MealItem";
import EntriesList from "../components/EntriesList";

export default function AllEntriesScreen({ navigation }) {
  function mealPressedHandle() {
    navigation.navigate("EditEntries");
  }
  return (
    <View style={commonStyle.generalContainer}>
      <EntriesList mealPressed={mealPressedHandle} type={"allEntries"} />
    </View>
  );
}
