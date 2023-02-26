import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Card from "../components/Card";
import EntriesList from "../components/EntriesList";

export default function AllEntriesScreen({ navigation }) {
  function mealPressedHandle() {
    navigation.navigate("EditEntries", { type: "allEntries" });
  }

  return (
    <View style={commonStyle.generalContainer}>
      <EntriesList mealPressed={mealPressedHandle} type={"allEntries"} />
    </View>
  );
}
