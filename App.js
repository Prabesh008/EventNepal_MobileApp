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
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserData } from "./src/Context/CredentialsContext";
//appLoading
import AppLoading from "expo-app-loading";

//importing JWT decode
import jwtDecode from "jwt-decode";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//credentials context
import { CredentialsContext } from "./src/Context/CredentialsContext";
import AuthContext from "./src/Context/authContext";
import BottomNavigator from "./src/components/BottomNavigator";
import AuthNavigator from "./src/components/Navigation/AuthNavigator";
import AppNavigator from "./src/components/Navigation/AppNavigator";
import AuthStorage from "./src/Context/AuthStorage";
import Khalti from "./src/components/Khalti/Khalti";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  // console.log(user);

  //To get the data of the user again after the app reloads
  const UserData = async (authtoken) => {
    try {
      const response = await fetch("http://192.168.0.4:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch {
      console.log("Couldn't fetch the user details list again");
    }
  };

  //resoring the user even after refreshing the app
  const restoreToken = async () => {
    const token = await AuthStorage.getToken();
    if (!token) return;
    UserData(token);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  // if (!isReady)
  //   return (
  //     <AppLoading
  //       startAsync={restoreToken}
  //       onFinish={() => setIsReady(true)}
  //     ></AppLoading>
  //   );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <EventContextProvider>
        <NavigationContainer>
          {user ? <StackNavigation /> : <AuthNavigator />}
        </NavigationContainer>
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
