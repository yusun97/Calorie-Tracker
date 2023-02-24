import { View, Text, ViewBase, FlatList } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";

export default function OverLimitEntriesScreen() {
  return (
    <View style={commonStyle.generalContainer}>
      <FlatList />

      <Text>overLimitEntriesScreen</Text>
    </View>
  );
}
