import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import ListItem from "../../components/ListItemm";
import ListItemSeparatorComponent from "../../components/ListItemSeperator";
import colors from "../../../config/colors";
import Icon from "../../components/Icon";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const menuItems = [
  {
    title: "Notification Center",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Help Center",
    icon: {
      name: "help",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Settings",
    icon: {
      name: "cog-outline",
      backgroundColor: colors.medium,
    },
  },
];
/* <View style={styles.container}>
        <ListItem
          title="Prabesh Khati Chhetri"
          subTitle="prabeshkhati40@gmail.com"
          image={require("../../../assets/images/icon.png")}
        />
  </View> */

const Account = (props) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.top_view}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/profile_picture.jpg")}
        />
        <AppText>Prabesh Khati Chhetri</AppText>
        <AppText>prabeshkhati40@gmail.com</AppText>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <TouchableNativeFeedback>
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            </TouchableNativeFeedback>
          )}
        />
      </View>
      <TouchableNativeFeedback>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </TouchableNativeFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  top_view: {
    alignItems: "center",
    marginVertical: 0,
    // borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginLeft: 0,
    elevation: 0,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    margin: 20,
  },
});

export default Account;
