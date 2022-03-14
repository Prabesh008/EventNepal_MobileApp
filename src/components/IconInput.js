import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, StyleSheet } from "react-native";
import { View } from "react-native";

const IconInput = ({
  placeholder,
  name,
  size,
  secureTextEntry,
  ...otherProps
}) => {
  return (
    <View style={styles.input}>
      <MaterialCommunityIcons
        name={name}
        size={size}
        style={{ marginRight: 10 }}
      ></MaterialCommunityIcons>
      <TextInput
        placeholder={placeholder}
        style={styles.field}
        secureTextEntry={secureTextEntry}
        {...otherProps}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    //marginLeft:10,
    //marginRight:10,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
    // backgroundColor: "#e4dfdf",
    backgroundColor: "white",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  field: {
    width: "90%",
    backgroundColor: "green",
    height: 40,
    paddingHorizontal: 5,
    // borderWidth: 1,
    // borderColor: "black",
  },
});

export default IconInput;
