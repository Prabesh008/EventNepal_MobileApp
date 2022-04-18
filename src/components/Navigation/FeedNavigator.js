import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetails from "../../screens/Feed/EventDetails";
import Map from "../../screens/Feed/Map";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventDetails" component={EventDetails} />
    <Stack.Screen name="MapView" component={Map} />
  </Stack.Navigator>
);

export default FeedNavigator;
