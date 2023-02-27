import { View, StyleSheet } from "react-native";
import React from "react";
import { shadowColor, lightPurple } from "./CommonStyle";

export default function Card({ children, customizedStyle }) {
  return <View style={[styles.card, customizedStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    borderRadius: 5,
    shadowColor: shadowColor,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightPurple,
  },
});
