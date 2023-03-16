import LinearGradientBackground from "../components/LinearGradientBackground";
import Card from "../components/Card";
import PressableButton from "../components/PressableButton";
import { commonStyle } from "../components/CommonStyle";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase/firebase-setup";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
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
      <View style={commonStyle.container}>
        <Text style={commonStyle.text}>Email Address</Text>
        <TextInput
          style={commonStyle.textInput}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          placeholder="Email"
        />
        <Text style={commonStyle.text}>Password</Text>
        <TextInput
          style={commonStyle.textInput}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          placeholder="Password"
        />
        <PressableButton
          buttonPressed={loginHandle}
          customizedStyle={commonStyle.buttonContainer}
        >
          <Text style={commonStyle.buttonText}>Login In</Text>
        </PressableButton>

        <PressableButton
          buttonPressed={signUpHandle}
          customizedStyle={commonStyle.buttonContainer}
        >
          <Text style={commonStyle.buttonText}>
            New Users ? Create a new account
          </Text>
        </PressableButton>
      </View>
    </LinearGradientBackground>
  );
}
