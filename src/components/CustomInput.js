import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "azure",
    padding: 5,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginVertical: 10,
    height: 50,
  },

  input: {
    backgroundColor: "ghostwhite",
    color: "black",
    height: 40,
    width: "80%",
    // padding: 10,
  },
});
export default CustomInput;
