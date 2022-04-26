import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../../components/ListItem";
import React from "react";
import { Searchbar } from "react-native-paper";
import Screen from "../../components/Screen";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { EventContext } from "../../Context/EventContext";
import { ScrollView } from "react-native-gesture-handler";

const SearchEvent = ({ navigation }) => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
    // console.log("This is for the search event page");
    // console.log(events);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  //setting the
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    // console.log(searchQuery);
  };

  return (
    <Screen>
      <View>
        <View style={styles.header}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <ScrollView>
          <View style={{ marginTop: 40 }}>
            {events
              .filter((val) => {
                if (searchQuery == "") {
                  return val;
                } else if (
                  val.tag.toLowerCase().includes(searchQuery.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((vals) => {
                return (
                  <TouchableOpacity key={vals._id}>
                    <ListItem time={vals.title} desc={vals.description} />
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    //borderWidth:2,
    //borderColor:"black",
    height: 100,
    marginHorizontal: 5,
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
  },
  screen: {
    height: "60%",
  },
});

export default SearchEvent;
