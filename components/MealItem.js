import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/Card";
import PressableButton from "./PressableButton";

export default function MealItem({ description, calories, onMealPressed }) {
  return (
    <PressableButton
      customizedStyle={styles.container}
      buttonPressed={onMealPressed}
    >
      {/* <Card customizedStyle={styles.container}> */}
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={{ flexDirection: "row" }}>
        {calories > 500 && <Entypo name="warning" size={23} color="yellow" />}
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesText}>{calories}</Text>
        </View>
      </View>
      {/* </Card> */}
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    margin: 20,
    borderRadius: 5,
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
