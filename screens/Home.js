import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntriesScreen from "./AllEntriesScreen";
import OverLimitEntriesScreen from "./OverLimitEntriesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PressableButton from "../components/PressableButton";
import { darkPurple, white, orange } from "../components/CommonStyle";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-setup";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: white,
        headerTitleStyle: styles.headerTitleStyle,
        tabBarActiveTintColor: orange,
        tabBarStyle: styles.tabBarStyle,
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <PressableButton
              buttonPressed={() => {
                navigation.navigate("AddEntries");
              }}
              customizedStyle={{ margin: 10 }}
            >
              <MaterialCommunityIcons name="plus" size={25} color={white} />
            </PressableButton>
          );
        },
        headerLeft: () => {
          return (
            <PressableButton
              buttonPressed={async () => {
                try {
                  await signOut(auth);
                } catch (error) {
                  console.log(error);
                }
              }}
              customizedStyle={{ margin: 10 }}
            >
              <Ionicons name="exit" size={30} color="white" />
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
        }}
      />
      <Tab.Screen
        name="overLimitEntries"
        component={OverLimitEntriesScreen}
        options={{
          title: "Over-limit Entries",
          tabBarIcon: ({ color, size }) => (
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

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: darkPurple,
    height: 80,
    paddingBottom: 20,
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  headerStyle: { backgroundColor: darkPurple },
});
