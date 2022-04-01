import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "../screens/SignInScreen/Registration";
import SignIn from "../screens/SignInScreen/SignIn";
import EventFeed from "../screens/Feed/EventFeed";
import EventDetails from "../screens/Feed/EventDetails";
import BottomNavigator from "./BottomNavigator";

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "grey",
          headerTransparent: false,
          headerTitle: "",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={SignIn}></Stack.Screen>
        <Stack.Screen name="Register" component={Registration}></Stack.Screen>
        <Stack.Screen name="Home" component={BottomNavigator}></Stack.Screen>
        <Stack.Screen name="EventDetails" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
