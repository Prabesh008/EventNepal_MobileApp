import React, { useContext, useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AuthContext from "../../Context/authContext";
import { Button } from "react-native";
import axios from "axios";
// import ListItem from "../../components/ListItem";
import ListItemBooking from "../../components/ListItemBooking";
import ListItemSeperator from "../../components/ListItemSeperator";
import { FlatList } from "react-native";
import { date } from "yup";

const UserBooking = () => {
  const { user, setUser } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const username = user.username;

  //method for getting user booking details
  // Get all Events
  const getBooking = () => {
    // API Call
    axios
      .get(`http://192.168.0.2:5000/api/event/bookingdetails/${username}`)
      .then((response) => {
        setBooking(response.data);
        // console.log(booking);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooking();
  }, [booking]);

  if (booking.length == 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No Booking to show</Text>
      </View>
    );
  } else {
    return (
      <View style={{ backgroundColor: "azure", flex: 1 }}>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Booking List</Text>
        </View>
        <FlatList
          data={booking.map((data) => {
            return data;
          })}
          keyExtractor={(event) => event._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log("Opacity Pressed");
              }}
            >
              <ListItemBooking
                title={item.event_info.title}
                username={item.user.username}
                location={item.event_info.location}
              />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    );
  }
};

export default UserBooking;
