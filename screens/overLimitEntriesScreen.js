import { View, Text, ViewBase, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import MealItem from "../components/MealItem";

export default function OverLimitEntriesScreen({ navigation }) {
  let des = "breakfast";
  let cal = 800;
  function mealPressed() {
    navigation.navigate("EditEntries");
  }

  return (
    <View style={commonStyle.generalContainer}>
      {/* <FlatList /> */}
      <MealItem description={des} calories={cal} onMealPressed={mealPressed} />
    </View>
  );
}
