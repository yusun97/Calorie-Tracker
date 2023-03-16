import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import EditEntriesScreen from "./screens/EditEntriesScreen";
import AddEntriesScreen from "./screens/AddEntriesScreen";
import { white, darkPurple } from "./components/CommonStyle";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase-setup";

const Stack = createNativeStackNavigator();

const AuthStack = (
  <>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
  </>
);

const AppStack = (
  <>
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
  </>
);

export default function App() {
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);

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
        {isAuth ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
