import React from "react";
import { StyleSheet, Text, View, BlurView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntriesScreen from "./AllEntriesScreen";
import OverLimitEntriesScreen from "./OverLimitEntriesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PressableButton from "../components/PressableButton";
import { useState } from "react";

const Tab = createBottomTabNavigator();

export default function Home({ navigation, route }) {
  console.log(route);
  const [meals, setMeals] = useState([]);

  function onMealEntered(changedCalories, changedDescription) {
    const newMeal = {
      calories: changedCalories,
      description: changedDescription,
      id: Math.random(),
    };
    setMeals((prevMeals) => {
      return [...prevMeals, newMeal];
    });
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(64,70,146)", height: 90 },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
        },
        tabBarActiveTintColor: "rgb(239,189,67)",
        tabBarStyle: {
          backgroundColor: "rgb(64,70,146)",
          height: 60,
          paddingBottom: 10,
        },
        headerRight: () => {
          return (
            <PressableButton
              buttonPressed={() => {
                navigation.navigate("AddEntries");
              }}
              customizedStyle={{ padding: 10 }}
            >
              <MaterialCommunityIcons name="plus" size={25} color="white" />
            </PressableButton>
          );
        },
      }}
    >
      <Tab.Screen
        name="allEntries"
        component={AllEntriesScreen}
        options={{
          title: "All Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="coffee" color={color} size={size} />
          ),
          //   tabBarIcon: (data) => console.log(data),
        }}
      />
      <Tab.Screen
        name="overLimitEntries"
        component={OverLimitEntriesScreen}
        options={{
          title: "Over-limit Entries",
          tabBarIcon: ({ color, size }) => (
            // console.log(color)
            <MaterialCommunityIcons
              name="exclamation-thick"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
