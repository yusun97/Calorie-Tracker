import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntriesScreen from "./AllEntriesScreen";
import OverLimitEntriesScreen from "./OverLimitEntriesScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "rgb(64, 70, 146)", height: 105 },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Tab.Screen
          name="allEntries"
          component={AllEntriesScreen}
          options={{ title: "All Entries" }}
        />
        <Tab.Screen
          name="overLimitEntries"
          component={OverLimitEntriesScreen}
          options={{
            title: "Over-limit Entries",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
