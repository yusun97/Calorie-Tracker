import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Card({ children, customizedStyle }) {
  return <View style={[styles.card, customizedStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 5, heigh: 5 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    borderRadius: 5,
    shadowColor: "rgba(96,96,96,1)",
    // padding: 20,
    // margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(150,150,219)",
  },
});
