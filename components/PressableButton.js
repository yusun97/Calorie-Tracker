import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PressableButton({
  buttonPressed,
  customizedStyle,
  children,
}) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.pressableDefault,
          customizedStyle,
          pressed && styles.pressedStyle,
        ];
      }}
      android_ripple={{ color: "white" }}
      onPress={buttonPressed}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableDefault: { backgroundColor: "rgb(64,70,146)", borderRadius: 5 },
  pressedStyle: { opacity: 0.3 },
});
