import React from "react";
import { View, TextInput } from "react-native";

// const MyTextInput = ({ label, icon, ...props }) => {
//   return <View></View>;
// };

// export default MyTextInput;

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} />
        <Text style={styles.styledInputLabel}></Text>
        <TextInput></TextInput>
      </View>
    </View>
  );
};
