import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback } from "react-native";

const SocialButton = (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={[styles.button, props.style]}>
        <MaterialCommunityIcons
          name={props.name}
          size={props.size}
          color={props.color}
        ></MaterialCommunityIcons>
        <Text style={{ marginLeft: 10 }}>{props.text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "lavender",
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 5,
    flexDirection: "row",
    height: 58,
    marginTop: 25,
    width: "100%",
  },
});

export default SocialButton;
