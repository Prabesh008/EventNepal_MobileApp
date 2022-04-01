import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import ListItem from "../../components/ListItem";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState, useEffect } from "react";

const temporary = [
  {
    id: 1,
    day: "Sunday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },

  {
    id: 2,
    day: "Monday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },

  {
    id: 3,
    day: "Tuesday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },

  {
    id: 4,
    day: "Wednesday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },

  {
    id: 5,
    day: "Thursday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },

  {
    id: 6,
    day: "Friday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },

  {
    id: 7,
    day: "Saturday",
    desc: "This Event is for the people who want to celebrate a great valentines day with the  love of their life",
    image: require("../../../assets/images/icon.png"),
  },
];

const EventFeed = ({ props, navigation }) => {
  //   const [listings, setListings] = useState([]);

  //   useEffect(() => {
  //     loadlistings();
  //   }, []);

  //   const loadlistings = async () => {
  //     const response = await listingsApi.getListings();
  //     setListings(response.data);
  //   };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column-reverse",
        // marginTop: Constants.statusBarHeight,
      }}
    >
      <View style={styles.screen}>
        <FlatList
          data={temporary}
          keyExtractor={(temp) => temp.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("EventDetails")}
            >
              <ListItem time={item.day} desc={item.desc} image={item.image} />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>

      <View style={styles.header}>
        <Searchbar placeholder="Search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // borderWidth:1,
    //borderColor:"black",
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: "ghostwhite",
    padding: 7,
  },
  header: {
    //borderWidth:2,
    //borderColor:"black",
    height: 100,
    marginHorizontal: 5,
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
export default EventFeed;
