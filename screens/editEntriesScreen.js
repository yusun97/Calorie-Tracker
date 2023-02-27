import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Card from "../components/Card";
import PressableButton from "../components/PressableButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { updateEntriesToDB, deleteFromDB } from "../firebase/firebaseHelper";
import {
  purple,
  lightPurple,
  darkPurple,
  pink,
  white,
  yellow,
  orange,
} from "../components/CommonStyle";

export default function EditEntriesScreen({ navigation, route }) {
  // console.log(route.params.type);
  function deleteEntries() {
    Alert.alert("Delete", "Are you sure you want to delete this?", [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          deleteFromDB(route.params.editedMeal.id);
          navigation.navigate(route.params.type);
        },
      },
    ]);
  }

  function updateReviewStatus() {
    Alert.alert(
      "Important",
      "Are you sure you want to mark the item as reviewed?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            updateEntriesToDB(route.params.editedMeal.id);
            navigation.navigate(route.params.type);
          },
        },
      ]
    );
  }

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
          <PressableButton
            customizedStyle={styles.buttonStyle}
            buttonPressed={deleteEntries}
          >
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={30}
              color={white}
            />
          </PressableButton>
          {!route.params.editedMeal.review && (
            <PressableButton
              customizedStyle={styles.buttonStyle}
              buttonPressed={updateReviewStatus}
            >
              <AntDesign name="check" size={30} color={white} />
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
    color: darkPurple,
    fontWeight: "600",
    fontSize: 24,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    padding: 12,
    margin: 20,
  },
});
