import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function mealItem({ description, calories }) {
  return (
    <View style={styles.container}>
      <Text>{description}</Text>
      <View>
        {calories > 500} &&
        <Entypo name="warning" size={24} color="black" />
        <Text>{calories}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(126,125,189)",
    alignItems: "space-between",
  },
});
