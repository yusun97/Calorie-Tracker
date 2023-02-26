import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";
import { useState } from "react";
import { writeToDB } from "../firebase/firebaseHelper";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase-setup";

export default function AddEntriesScreen({ navigation, route }) {
  // console.log(route);
  const [meals, setMeals] = useState([]);
  // const newMeal;
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "meals"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setMeals([]);
        } else {
          let mealsFromDB = [];
          querySnapshot.docs.forEach((snapDoc) => {
            mealsFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
          });
          setMeals(mealsFromDB);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  function onMealEntered(changedCalories, changedDescription) {
    const newMeal = {
      calories: changedCalories,
      description: changedDescription,
    };

    writeToDB(newMeal);
    navigation.navigate("Home");

    // navigation.navigate("Home", {
    //   newMeal: newMeal,
    // });
    // setMeals((prevMeals) => {
    //   console.log("previous meal");
    //   console.log(prevMeals);
    //   return [...prevMeals, newMeal];
    // });

    // console.log(newMeal);
    // console.log(meals);
    // backToHome();
  }

  // function backToHome() {
  // console.log("inside" + changedCalories);
  // console.log("inside" + changedDescription);
  // navigation.navigate("Home", {
  //   calories: changedCalories,
  //   description: changedDescription,
  // });
  // navigation.navigate("Home", { mealEntries: meals });
  // console.log(meals);
  // navigation.navigate("Home");
  // }

  return (
    <View style={commonStyle.generalContainer}>
      <Input mealEntered={onMealEntered} />
    </View>
  );
}
