import React from "react";
import { StyleSheet, Text, View, BlurView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntriesScreen from "./AllEntriesScreen";
import OverLimitEntriesScreen from "./OverLimitEntriesScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(64, 70, 146)", height: 105 },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
        },
        // tabBarStyle: { position: "absolute" },
        // tabBarBackground: () => (
        //   <BlurView
        //     tint="light"
        //     intensity={100}
        //     style={{ backgroundColor: "rgb(64, 70, 146)" }}
        //   />
        // ),
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
  );
}
