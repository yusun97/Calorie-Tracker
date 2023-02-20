import { StatusBar } from "expo-status-bar"; //do we need this?
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import AddEntriesScreen from "./screens/AddEntriesScreen";
import EditEntriesScreen from "./screens/EditEntriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "rgb(64, 70, 146)", height: 105 },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddEntries" component={AddEntriesScreen} />
        <Stack.Screen name="EditEntries" component={EditEntriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
