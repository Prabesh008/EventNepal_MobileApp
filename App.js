import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import SignIn from "./src/screens/SignInScreen/SignIn";
// import EventFeed from "./src/screens/SignInScreen/EventFeed";
// import Registration from "./src/screens/SignInScreen/Registration";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";
import EventFeed from "./src/screens/Feed/EventFeed";
import EventDetails from "./src/screens/Feed/EventDetails";
import Account from "./src/screens/SignInScreen/Account";
// import BottomNavigator from "./src/components/BottomNavigator";
import StackNavigation from "./src/components/StackNavigation";

// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="feed" component={Event} />
//       <Tab.Screen name="account" component={Account} />
//     </Tab.Navigator>
//   );
// }
// const Account = () => <Text>This is the account section</Text>;
// const Event = ({ navigation }) => (
//   <>
//     <Text>Event feed</Text>
//     <Button
//       title="press"
//       onPress={() => navigation.navigate("eventdetails")}
//     ></Button>
//   </>
// );

// const EventDetail = () => <Text>Event Details</Text>;

// const MyStack = () => (
//   <Stack.Navigator
//   screenOptions={{

//   }}>
//     <Stack.Screen
//       name="home"
//       component={BottomNavigator}
//       options={{ headerShown: false }}
//     />
//     <Stack.Screen name="EventDetails" component={EventDetails} />
//   </Stack.Navigator>
// );

export default function App() {
  return (
    <>
      <StackNavigation />
    </>
  );
}
<Account username="Prabesh" user_email="prabeshkhati40@gmail.com" />;

const styles = StyleSheet.create({
  view: {
    marginTop: Constants.statusBarHeight,
    // flex: 1,
    marginHorizontal: 5,
  },
});

/* <Stack.Navigator>
  <Stack.Screen name="EventFeed" component={EventFeed}></Stack.Screen>
  <Stack.Screen name="EventDetails" component={EventDetails}></Stack.Screen>
  <Stack.Screen name="Account" component={Account}></Stack.Screen>
</Stack.Navigator>; */
