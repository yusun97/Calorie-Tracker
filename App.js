import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import EditEntriesScreen from "./screens/EditEntriesScreen";
import AddEntriesScreen from "./screens/AddEntriesScreen";
import { white, darkPurple } from "./components/CommonStyle";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: darkPurple },
          headerTintColor: white,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditEntries"
          component={EditEntriesScreen}
          options={{ title: "Edit Entry" }}
        />
        <Stack.Screen
          name="AddEntries"
          component={AddEntriesScreen}
          options={{ title: "Add An Entry" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
