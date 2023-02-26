import { View, Text } from "react-native";
import React from "react";
import { firestore } from "./firebase-setup";
import { collection, addDoc } from "firebase/firestore";

export async function writeToDB(data) {
  try {
    await addDoc(collection(firestore, "entries"), data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFromDB(deletedID) {
  try {
    await deleteDoc(doc(firestore, "allEntries", deletedID));
  } catch (error) {
    console.log(error);
  }
}
