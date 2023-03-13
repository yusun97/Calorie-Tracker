import { View, Text, Modal } from "react-native";
import React from "react";
import LinearGradientBackground from "../components/LinearGradientBackground";

export default function Login({ modalVisible }) {
  return (
    <Modal visible={modalVisible}>
      <LinearGradientBackground>
        <Text>This is the login in page</Text>
      </LinearGradientBackground>
    </Modal>
  );
}
