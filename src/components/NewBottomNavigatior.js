import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import SettingScreen from "./screens/SettingScreen";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarOptions: {
        activeTintColor: "#006600",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="md-home"
            size={24}
            color={tabInfo.focused ? "#006600" : "#8e8e93"}
          />
        );
      },
    },
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      tabBarLabel: "User",
      tabBarOptions: {
        activeTintColor: "#006600",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="md-person-circle-outline"
            size={24}
            color={tabInfo.focused ? "#006600" : "#8e8e93"}
          />
        );
      },
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: "Setting",
      tabBarOptions: {
        activeTintColor: "#006600",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="md-settings-outline"
            size={24}
            color={tabInfo.focused ? "#006600" : "#8e8e93"}
          />
        );
      },
    },
  },
});

const Navigator = createAppContainer(TabNavigator);
