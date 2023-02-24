import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 10, heigh: 10 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    borderRadius: 10,
    shadowColor: "rgba(96,96,96,1)",
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(126,125,189)",
  },
});
