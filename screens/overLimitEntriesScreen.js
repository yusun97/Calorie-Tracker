import { View, Text, ViewBase, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import MealItem from "../components/MealItem";
import PressableButton from "../components/PressableButton";

export default function OverLimitEntriesScreen({ navigation }) {
  let des = "breakfast";
  let cal = 300;
  function mealPressed() {
    navigation.navigate("EditEntries");
  }

  return (
    <View style={commonStyle.generalContainer}>
      {/* <FlatList /> */}
      {/* <PressableButton> */}
      <MealItem description={des} calories={cal} onMealPressed={mealPressed} />
      {/* </PressableButton> */}

      {/* <Text>overLimitEntriesScreen</Text> */}
    </View>
  );
}
