import React from "react";
import { View, StyleSheet } from "react-native";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "ghostwhite",
  },
});

export default ListItemSeperator;
