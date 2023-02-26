import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";
import { firestore } from "../firebase/firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";

export default function EntriesList({ mealPressed }) {
  const [meals, setMeals] = useState([]);
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

  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => {
        return <MealItem mealEntry={item} onMealPressed={mealPressed} />;
      }}
    />
  );
}
