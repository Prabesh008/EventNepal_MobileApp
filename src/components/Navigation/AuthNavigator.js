import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewSignIn from "../../screens/SignInScreen/NewSignIn";
import NewRegistration from "../../screens/SignInScreen/NewRegistration";
import Screen from "../Screen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Screen>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "grey",
        headerTransparent: false,
        headerTitle: "",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={NewSignIn}></Stack.Screen>
      <Stack.Screen name="Register" component={NewRegistration}></Stack.Screen>
    </Stack.Navigator>
  </Screen>
);

export default AuthNavigator;
