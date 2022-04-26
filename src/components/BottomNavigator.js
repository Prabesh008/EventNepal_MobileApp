import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventFeed from "../screens/Feed/EventFeed";
import SearchEvent from "../screens/Feed/SearchEvent";
import Account from "../screens/SignInScreen/Account";
import SignIn from "../screens/SignInScreen/SignIn";
import UserBooking from "../screens/Feed/UserBooking";
import { Ionicons } from "@expo/vector-icons";
import Icon from "./Icon";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={EventFeed}
        options={{ tabBarIcon: () => <Icon name={"home"} /> }}
      ></Tab.Screen>
      <Tab.Screen
        name="FindEvent"
        component={SearchEvent}
        options={{ tabBarIcon: () => <Icon name={"magnify"} /> }}
      ></Tab.Screen>
      <Tab.Screen
        name="Booking"
        component={UserBooking}
        options={{ tabBarIcon: () => <Icon name={"ticket"} /> }}
      ></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarIcon: () => <Icon name={"account"} /> }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
