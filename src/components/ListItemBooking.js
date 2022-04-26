import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ListItemBooking({ title, username, location }) {
  return (
    <View style={styles.outerview}>
      <View style={styles.innerview}>
        <Text style={{ marginBottom: 5, fontWeight: "bold", color: "orange" }}>
          {title}
        </Text>
        <Text>{username}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerview: {
    flexDirection: "row",
    marginVertical: 5,
    height: 120,
    paddingLeft: 11,
    borderRadius: 15,
    //borderWidth:2,
    //borderColor:"black",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  innerview: {
    justifyContent: "center",
    marginLeft: 10,
    width: "75%",
    padding: 5,
    //borderWidth:2,
    // borderColor:"blue",
    marginVertical: 10,
  },
});
export default ListItemBooking;
