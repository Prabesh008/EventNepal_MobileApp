import React from "react";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { View } from "react-native";

function Screen(props) {
  return <View style={[styles.screen, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Screen;
