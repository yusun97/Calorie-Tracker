import { View } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import EntriesList from "../components/EntriesList";

export default function OverLimitEntriesScreen({ navigation }) {
  function mealPressedHandle(mealEntry) {
    navigation.navigate("EditEntries", {
      type: "overLimitEntries",
      editedMeal: mealEntry,
    });
  }

  return (
    <View style={commonStyle.generalContainer}>
      <EntriesList mealPressed={mealPressedHandle} type="overLimitEntries" />
    </View>
  );
}
