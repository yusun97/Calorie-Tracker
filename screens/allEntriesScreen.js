import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";

export default function AllEntriesScreen() {
  return (
    <View style={commonStyle.generalContainer}>
      <FlatList/>
      <Text>allEntriesScreen</Text>
    </View>
  );
}
