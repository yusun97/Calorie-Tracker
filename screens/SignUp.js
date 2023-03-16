import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase/firebase-setup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LinearGradientBackground from "../components/LinearGradientBackground";
import { commonStyle } from "../components/CommonStyle";
import PressableButton from "../components/PressableButton";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function loginHandle() {
    navigation.replace("Login");
  }

  async function signUpHandle() {
    if (password !== confirmPassword) {
      //check value and type
      Alert.alert("The password don't match");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LinearGradientBackground>
      <View style={commonStyle.container}>
        <Text style={commonStyle.text}>Email</Text>
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
        <Text style={commonStyle.text}>Confirm Password</Text>
        <TextInput
          style={commonStyle.textInput}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(confirmPassword) => {
            setConfirmPassword(confirmPassword);
          }}
          placeholder="Confirm Password"
        />

        <PressableButton
          buttonPressed={signUpHandle}
          customizedStyle={commonStyle.buttonContainer}
        >
          <Text style={commonStyle.buttonText}>Register</Text>
        </PressableButton>

        <PressableButton
          buttonPressed={loginHandle}
          customizedStyle={commonStyle.buttonContainer}
        >
          <Text style={commonStyle.buttonText}>Already Register</Text>
        </PressableButton>
      </View>
    </LinearGradientBackground>
  );
}
