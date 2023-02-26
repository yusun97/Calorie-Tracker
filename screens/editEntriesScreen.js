import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Card from "../components/Card";
import PressableButton from "../components/PressableButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function EditEntriesScreen({ route }) {
  return (
    <View style={commonStyle.generalContainer}>
      <Card customizedStyle={styles.container}>
        <Text style={styles.textStyle}>
          Calories: {route.params.editedMeal.calories}
        </Text>
        <Text style={styles.textStyle}>
          Description: {route.params.editedMeal.description}
        </Text>
        <View style={styles.buttonContainer}>
          <PressableButton customizedStyle={styles.buttonStyle}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={30}
              color="white"
            />
          </PressableButton>
          {route.params.type === "overLimitEntries" && (
            <PressableButton customizedStyle={styles.buttonStyle}>
              <AntDesign name="check" size={30} color="white" />
            </PressableButton>
          )}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 35,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "rgb(64,70,146)",
    fontWeight: "600",
    fontSize: 24,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    paddingLeft: 24,
    paddingRight: 24,
    padding: 12,
    margin: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
});
