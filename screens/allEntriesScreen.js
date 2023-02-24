import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
// import MealItem from "../components/MealItem";
import Card from "../components/Card";

export default function AllEntriesScreen() {
  return (
    <View style={commonStyle.generalContainer}>
      {/* <FlatList/> */}
      {/* <MealItem /> */}
      <Card>
        <Text>allEntriesScreen</Text>
      </Card>
    </View>
  );
}
