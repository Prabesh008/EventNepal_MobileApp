import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
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
    height: 58,
    marginTop: 25,
    width: "100%",
  },
});
export default CustomButton;
