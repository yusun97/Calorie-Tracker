import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";
import { auth, firestore } from "../firebase/firebase-setup";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function EntriesList({ mealPressed, type }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const q =
      type === "overLimitEntries"
        ? query(
            collection(firestore, "entries"),
            where("review", "==", false),
            where("user", "==", auth.currentUser.uid)
          )
        : query(
            collection(firestore, "entries"),
            where("user", "==", auth.currentUser.uid)
          );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setMeals([]);
      } else {
        let mealsFromDB = [];
        querySnapshot.docs.forEach((snapDoc) => {
          mealsFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
        });
        setMeals(mealsFromDB);
      }
    });
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
