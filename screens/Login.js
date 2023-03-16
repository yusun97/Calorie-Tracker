import { View, Text, Modal } from "react-native";
import React from "react";
import LinearGradientBackground from "../components/LinearGradientBackground";
import Card from "../components/Card";
import PressableButton from "../components/PressableButton";
import { StyleSheet } from "react-native";
import { lightPurple, darkPurple, white } from "../components/CommonStyle";

export default function Login() {
  return (
    <LinearGradientBackground>
      <View style={styles.genericContainer}>
        <Text>Welcome to the Login in Page</Text>

        <View style={styles.buttonContainer}>
          <PressableButton>
            <Text style={styles.buttonText}>Login in</Text>
          </PressableButton>
          <PressableButton>
            <Text style={styles.buttonText}>Sign Up</Text>
          </PressableButton>
        </View>
      </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  genericContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 10,
    paddingTop: 70,
    margin: 10,
  },
  text: {
    color: darkPurple,
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    // margin: 20,
    // padding: 20,
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  buttonText: {
    color: white,
    fontSize: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  smallTextContainer: {
    backgroundColor: lightPurple,
    borderRadius: 5,
    height: 30,
    width: 200,
  },
  bigTextContainer: {
    backgroundColor: lightPurple,
    borderRadius: 5,
    height: 160,
    width: 200,
  },
});
