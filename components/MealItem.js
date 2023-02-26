import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/Card";
import PressableButton from "./PressableButton";

export default function MealItem({ mealEntry, onMealPressed }) {
  const [limit, setLimit] = useState(500);
  // console.log(mealEntry);
  return (
    <View style={{ margin: 10 }}>
      <PressableButton
        customizedStyle={{ backgroundColor: "rgb(126,125,189)" }}
        buttonPressed={() => {
          return onMealPressed(mealEntry);
        }}
      >
        <Card customizedStyle={styles.cardContainer}>
          <Text style={styles.descriptionText}>{mealEntry.description}</Text>

          <View style={{ flexDirection: "row" }}>
            {!mealEntry.review && (
              <Entypo name="warning" size={23} color="yellow" />
            )}

            <View style={styles.caloriesContainer}>
              <Text style={styles.caloriesText}>{mealEntry.calories}</Text>
            </View>
          </View>
        </Card>
      </PressableButton>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "rgb(64,70,146)",
  },
  caloriesContainer: {
    backgroundColor: "white",
    paddingRight: 15,
    paddingLeft: 15,
    padding: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  caloriesText: {
    color: "rgb(64,70,146)",
    fontWeight: "700",
    fontSize: 18,
  },
  descriptionText: {
    color: "rgb(219,211,242)",
    fontSize: 20,
    fontWeight: "500",
  },
});
