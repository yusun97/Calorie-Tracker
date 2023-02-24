import { View, Text } from "react-native";
import React from "react";
import { commonStyle } from "../components/CommonStyle";
import Input from "../components/Input";

export default function AddEntriesScreen() {
  return (
    <View styles={commonStyle.generalContainer}>
      <Input />
    </View>
  );
}
