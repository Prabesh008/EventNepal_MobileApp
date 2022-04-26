import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FindEvent" component={SearchEvent}></Tab.Screen>
      <Tab.Screen name="Booking" component={UserBooking}></Tab.Screen>
      <Tab.Screen name="Account" component={Account}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MyTabs;
