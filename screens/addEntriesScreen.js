import { View, Text } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";
import { useState } from "react";

export default function AddEntriesScreen({ navigation, route }) {
  // console.log(route);
  // const [meals, setMeals] = useState([]);
  // const newMeal;

  function onMealEntered(changedCalories, changedDescription) {
    const newMeal = {
      calories: changedCalories,
      description: changedDescription,
      id: Math.random(),
    };

    navigation.navigate("Home", {
      newMeal: newMeal,
    });
    // setMeals((prevMeals) => {
    //   console.log("previous meal");
    //   console.log(prevMeals);
    //   return [...prevMeals, newMeal];
    // });

    // console.log(newMeal);
    // console.log(meals);
    // backToHome();
  }

  function backToHome() {
    // console.log("inside" + changedCalories);
    // console.log("inside" + changedDescription);
    navigation.navigate("Home", {
      calories: changedCalories,
      description: changedDescription,
    });
    // navigation.navigate("Home", { mealEntries: meals });
    // console.log(meals);
    // navigation.navigate("Home");
  }

  return (
    <View style={commonStyle.generalContainer}>
      <Input mealEntered={onMealEntered} />
    </View>
  );
}
