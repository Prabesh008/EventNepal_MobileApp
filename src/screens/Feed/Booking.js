import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import AuthContext from "../../Context/authContext";
import Screen from "../../components/Screen";
import axios from "axios";

const Booking = () => {
  const routes = useRoute();
  const { user, setUser } = useContext(AuthContext);

  const username = user.username;
  const eventcode = routes.params.eventcode;

  const handlePress = () => {
    axios({
      method: "post",
      url: "http://192.168.0.2:5000/api/event/booking",
      data: {
        username: username,
        eventcode: eventcode,
      },
    })
      .then((response) => {
        alert("Booking Successful");
        console.log(response.data);
      })
      .catch((error) => {
        // alert("There has been an error");
        console.log(error);
      });
  };

  return (
    <Screen>
      <Card style={{ height: "90%", borderWidth: 2, borderColor: "black" }}>
        <Card.Title title={routes.params.title} subtitle="Card Subtitle" />
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={{ marginHorizontal: 10 }}
        />
        <Card.Content>
          <Paragraph>Location:{routes.params.location} </Paragraph>
          <Paragraph>Date: {routes.params.date}</Paragraph>
          <Paragraph>description:{routes.params.description}</Paragraph>
        </Card.Content>
        <Card.Actions style={{ marginTop: 20 }}>
          <Button
            color="white"
            style={{ backgroundColor: "dodgerblue", marginLeft: 10 }}
            onPress={handlePress}
          >
            Book
          </Button>
        </Card.Actions>
      </Card>
    </Screen>
  );
};

export default Booking;
