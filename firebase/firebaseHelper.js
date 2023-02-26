import { View, Text } from "react-native";
import React from "react";
import { firestore } from "./firebase-setup";
import { collection, addDoc } from "firebase/firestore";

export async function writeToDBAll(data) {
  try {
    await addDoc(collection(firestore, "allEntries"), data);
  } catch (error) {
    console.log(error);
  }
}

export async function writeToDBOver(data) {
  try {
    await addDoc(collection(firestore, "overLimitEntries"), data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFromDBOver(deletedID) {
  try {
    await deleteDoc(doc(firestore, "overLimitEntries", deletedID));
  } catch (error) {
    console.log(error);
  }
}
