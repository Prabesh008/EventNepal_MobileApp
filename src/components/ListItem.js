import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ListItem({ time, title, desc }) {
  return (
    <View style={styles.outerview}>
      <Image
        style={styles.image}
        source={require("../../assets/images/eventpic.jpg")}
      />
      <View style={styles.innerview}>
        <Text style={{ marginBottom: 5, fontWeight: "bold", color: "orange" }}>
          {title}
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 5 }}>{time}</Text>
        <Text numberOfLines={2}>{desc}</Text>
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
  image: {
    height: 70,
    width: 70,
    alignSelf: "center",
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
export default ListItem;
