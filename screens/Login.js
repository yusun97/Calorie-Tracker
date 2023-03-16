// import { View, Text, Modal } from "react-native";
// import React from "react";
import LinearGradientBackground from "../components/LinearGradientBackground";
import Card from "../components/Card";
import PressableButton from "../components/PressableButton";
import { lightPurple, darkPurple, white } from "../components/CommonStyle";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase/firebase-setup";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandle() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  function signUpHandle() {
    navigation.replace("SignUp");
  }

  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <Text>Email Address</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          placeholder="Email"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          placeholder="Password"
        />
        <PressableButton buttonPressed={loginHandle}>
          <Text style={styles.buttonText}>Login In</Text>
        </PressableButton>

        <PressableButton buttonPressed={signUpHandle}>
          <Text style={styles.buttonText}>
            New Users ? Create a new account
          </Text>
        </PressableButton>
      </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: { borderWidth: 3, width: 200, height: 30 },
  // text: {
  //   color: darkPurple,
  //   fontWeight: "bold",
  //   fontSize: 20,
  // },
  // buttonContainer: {
  //   // margin: 20,
  //   // padding: 20,
  //   justifyContent: "space-between",
  //   alignItems: "space-between",
  // },
  buttonText: {
    color: white,
    fontSize: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  // smallTextContainer: {
  //   backgroundColor: lightPurple,
  //   borderRadius: 5,
  //   height: 30,
  //   width: 200,
  // },
  // bigTextContainer: {
  //   backgroundColor: lightPurple,
  //   borderRadius: 5,
  //   height: 160,
  //   width: 200,
  // },
});
