import React from "react";
import { StyleSheet, Text, View, BlurView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntriesScreen from "./AllEntriesScreen";
import OverLimitEntriesScreen from "./OverLimitEntriesScreen";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(64, 70, 146)", height: 105 },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
        },
        headerRight: () => {
          return (
            //pressable button needed
            <Pressable
              onPress={() => {
                navigation.navigate("AddEntries");
              }}
            >
              <AntDesign name="plus" size={24} color="white" />
            </Pressable>
          );
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
  );
}
