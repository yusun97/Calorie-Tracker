import { View, Text } from "react-native";
import React from "react";
import { firestore } from "./firebase-setup";
import { collection } from "firebase/firestore";

export async function writeToDB(data) {
  try {
    const docRef = await addDoc(collection(firestore, "meals"), data);
  } catch (error) {
    console.log(error);
  }
}
