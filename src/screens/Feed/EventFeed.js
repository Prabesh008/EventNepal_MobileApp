import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import ListItem from "../../components/ListItem";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState, useEffect } from "react";
import axios from "axios";

//importing contexts
import { useContext } from "react";
import EventContextProvider from "../../Context/EventContext";
import { EventContext } from "../../Context/EventContext";
import EventDetails from "./EventDetails";

const EventFeed = ({ navigation }) => {
  const { events, getEvents } = useContext(EventContext);

  // const url = "http://192.168.0.2:5000/api/event/fetchallevents";
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContextProvider>
      <View
        style={{
          flex: 1,
          flexDirection: "column-reverse",
          // marginTop: Constants.statusBarHeight,
        }}
      >
        <View style={styles.screen}>
          <FlatList
            data={events}
            keyExtractor={(event) => event._id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EventDetails", {
                    title: item.title,
                    description: item.description,
                    location: item.location,
                    date: item.date,
                  })
                }
              >
                <ListItem
                  time={item.title}
                  desc={item.description}
                  image={item.image}
                />
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>

        <View style={styles.header}>
          <Searchbar placeholder="Search" />
        </View>
      </View>
    </EventContextProvider>
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

//Chaleko view ko code temporary data ko wala

{
  /* <View style={styles.screen}>
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
</View> */
}
