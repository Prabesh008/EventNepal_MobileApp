import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventFeed from "../screens/Feed/EventFeed";
import SearchEvent from "../screens/Feed/SearchEvent";
import Account from "../screens/SignInScreen/Account";
import SignIn from "../screens/SignInScreen/SignIn";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        headerTransparent: "true",
      }}
    >
      <Tab.Screen name="Feed" component={EventFeed}></Tab.Screen>
      <Tab.Screen name="FindEvent" component={SearchEvent}></Tab.Screen>
      <Tab.Screen name="Account" component={Account}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
