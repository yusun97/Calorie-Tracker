import { firestore } from "./firebase-setup";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function writeToDB(data) {
  try {
    await addDoc(collection(firestore, "entries"), data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFromDB(deletedID) {
  try {
    await deleteDoc(doc(firestore, "entries", deletedID));
  } catch (error) {
    console.log(error);
  }
}

export async function updateEntriesToDB(updatedID) {
  // console.log("update work");
  const updateEntries = doc(firestore, "entries", updatedID);
  try {
    await updateDoc(updateEntries, { review: true });
  } catch (error) {
    console.log(error);
  }
}
