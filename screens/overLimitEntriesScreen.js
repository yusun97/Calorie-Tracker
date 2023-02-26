import { View, Text, ViewBase, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import MealItem from "../components/MealItem";
import EntriesList from "../components/EntriesList";
import { useState } from "react";

export default function OverLimitEntriesScreen({ navigation }) {
  function mealPressedHandle() {
    navigation.navigate("EditEntries");
  }

  return (
    <View style={commonStyle.generalContainer}>
      <EntriesList mealPressed={mealPressedHandle} type={"overLimitEntries"} />
    </View>
  );
}
