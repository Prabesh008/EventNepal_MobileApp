import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from "react";
import EventContextProvider from "../../Context/EventContext";
import { EventContext } from "../../Context/EventContext";
import { useRoute } from "@react-navigation/native";

// const LeftContent = (props) => <Avatar.Icon {...props} />;

const EventDetails = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button Pressed");
    navigation.navigate("MapView");
  };

  const route = useRoute();
  // const { events } = useContext(EventContext);

  return (
    <Screen>
      <Card style={{ height: "90%", borderWidth: 2, borderColor: "black" }}>
        <Card.Title title={route.params.title} subtitle="Card Subtitle" />
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={{ marginHorizontal: 10 }}
        />
        <Card.Content>
          <Paragraph>Location: {route.params.location}</Paragraph>
          <Paragraph>Date: {route.params.date}</Paragraph>
          <Paragraph>{route.params.description}</Paragraph>
        </Card.Content>
        <Card.Actions style={{ marginTop: 20 }}>
          <Button
            color="white"
            style={{ backgroundColor: "dodgerblue" }}
            onPress={handlePress}
          >
            Navigate
          </Button>
        </Card.Actions>
      </Card>
    </Screen>
  );
};

export default EventDetails;
