import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native";
import EventFeed from "./src/screens/Feed/EventFeed";
import EventDetails from "./src/screens/Feed/EventDetails";
import Account from "./src/screens/SignInScreen/Account";
import StackNavigation from "./src/components/StackNavigation";
import Screen from "./src/components/Screen";
import SignIn from "./src/screens/SignInScreen/SignIn";
import NewSignIn from "./src/screens/SignInScreen/NewSignIn";
import NewRegistration from "./src/screens/SignInScreen/NewRegistration";
import EventContextProvider from "./src/Context/EventContext";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
//appLoading
import AppLoading from "expo-app-loading";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//credentials context
import { CredentialsContext } from "./src/Context/CredentialsContext";
import AuthContext from "./src/Context/authContext";
import BottomNavigator from "./src/components/BottomNavigator";
import AuthNavigator from "./src/components/Navigation/AuthNavigator";
import AppNavigator from "./src/components/Navigation/AppNavigator";

export default function App() {
  const [user, setUser] = useState();
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <EventContextProvider>
        <Screen>
          <NavigationContainer>
            {user ? <StackNavigation /> : <AuthNavigator />}
          </NavigationContainer>
        </Screen>
      </EventContextProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: Constants.statusBarHeight,
    // flex: 1,
    marginHorizontal: 5,
  },
});
