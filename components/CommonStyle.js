import { StyleSheet } from "react-native";
import React from "react";

export const purple = "rgb(126,125,189)";
export const darkPurple = "rgb(64,70,146)";
export const lightPurple = "rgb(150,150,219)";
export const white = "#fff";
export const shadowColor = "rgba(96,96,96,1)";
export const pink = "rgb(219,211,242)";
export const yellow = "rgb(255,253,84)";
export const orange = "rgb(239,189,67)";

export const commonStyle = StyleSheet.create({
  generalContainer: {
    backgroundColor: purple,
    flex: 1,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 200,
    height: 30,
    backgroundColor: white,
    margin: 10,
    padding: 5,
  },
  text: {
    color: darkPurple,
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonText: {
    color: white,
    fontSize: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
