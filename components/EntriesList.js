import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";
import { firestore } from "../firebase/firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";

export default function EntriesList({ mealPressed, type }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, type),
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

  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => {
        return <MealItem mealEntry={item} onMealPressed={mealPressed} />;
      }}
    />
  );
}
