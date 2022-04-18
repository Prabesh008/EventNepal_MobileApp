import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "../screens/SignInScreen/Registration";
import SignIn from "../screens/SignInScreen/SignIn";
import EventFeed from "../screens/Feed/EventFeed";
import NewSignIn from "../screens/SignInScreen/NewSignIn";
import NewRegistration from "../screens/SignInScreen/NewRegistration";
import EventDetails from "../screens/Feed/EventDetails";
import BottomNavigator from "./BottomNavigator";
import Map from "../screens/Feed/Map";

const Stack = createNativeStackNavigator();

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

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "grey",
        headerTransparent: false,
        headerTitle: "",
        headerShown: true,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={BottomNavigator}></Stack.Screen>
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="MapView" component={Map} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
