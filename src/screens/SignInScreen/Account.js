import React, { useContext, useState } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import ListItem from "../../components/ListItemm";
import ListItemSeparatorComponent from "../../components/ListItemSeperator";
import colors from "../../../config/colors";
import Icon from "../../components/Icon";
import { Modal } from "react-native";
import {
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import AuthContext from "../../Context/authContext";
import { Button } from "react-native";
import AuthStorage from "../../Context/AuthStorage";
import axios from "axios";
import KeyboardAvoidingWrapper from "../../components/KeyBoardAvoidingWrapper";

const Account = ({ props, navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    AuthStorage.removeToken();
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const userId = user._id;

  const handleDelete = () => {
    axios
      .delete(`http://192.168.0.4:5000/api/auth/deleteuser/${userId}`)
      .then((response) => {
        alert("User Successfully deleted");
        handleLogout();
        // console.log(booking);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = () => {
    axios({
      method: "patch",
      url: `http://192.168.0.4:5000/api/auth/updateuser/${userId}`,
      data: {
        fullname: fullname,
        username: username,
      },
    })
      .then((response) => {
        alert("Successfully Updated");
        console.log(response.data);
      })
      .catch((error) => {
        // alert("There has been an error");
        console.log(error);
      });
  };

  return (
    <>
      <View style={styles.top_view}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/profile_picture.jpg")}
        />
        <AppText style={{ marginVertical: 8 }}>{user.username}</AppText>
        {/* <AppText>{user.fullname}</AppText> */}
        <AppText>{user.email}</AppText>
      </View>

      <View style={styles.container}>
        <View style={styles.lowerView}>
          <Icon
            name="bell-outline"
            size={35}
            backgroundColor="red"
            iconColor="white"
          ></Icon>
          <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "bold" }}>
            Notification Center
          </Text>
        </View>

        <View style={styles.lowerView}>
          <Icon
            name="account"
            size={35}
            backgroundColor="red"
            iconColor="white"
          ></Icon>
          <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "bold" }}>
            Help Center
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={styles.lowerView}>
            <Icon
              name="cog"
              size={35}
              backgroundColor="red"
              iconColor="white"
            ></Icon>
            <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "bold" }}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Button title="Logout" onPress={handleLogout} />
      <KeyboardAvoidingWrapper>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <View style={styles.top_view}>
              <Image
                style={styles.image}
                source={require("../../../assets/images/profile_picture.jpg")}
              />
              <AppText>{user.fullname}</AppText>
              <AppText>{user.username}</AppText>
              <AppText>{user.email}</AppText>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
              <TextInput
                style={styles.styleEdit}
                onChangeText={(text) => {
                  setFullname(text);
                }}
                placeholder="fullname"
              ></TextInput>
              <TextInput
                style={styles.styleEdit}
                onChangeText={(text) => {
                  setUsername(text);
                }}
                placeholder="username"
              ></TextInput>

              <TouchableNativeFeedback
                onPress={() => {
                  handleUpdate();
                  setModalVisible(false);
                  setTimeout(() => {
                    handleLogout();
                  }, 2000);
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    backgroundColor: "green",
                    height: 60,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "white" }}>Update</Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={handleDelete}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    backgroundColor: "red",
                    height: 60,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "white" }}>Delete</Text>
                </View>
              </TouchableNativeFeedback>

              {/* <Button
              onPress={() => {
                handleUpdate();
                setModalVisible(false);
                setTimeout(() => {
                  handleLogout();
                }, 2000);
              }}
              title="Update"
            ></Button> */}

              {/* <View style={{ marginVertical: 20 }}>
              <Button onPress={handleDelete} color="red" title="Delete" />
            </View> */}
              <View style={{ marginVertical: 20 }}>
                <Button
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  title="Back"
                ></Button>
              </View>
            </View>
          </Screen>
        </Modal>
      </KeyboardAvoidingWrapper>
    </>
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
    // borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginLeft: 0,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    margin: 20,
  },

  styleEdit: {
    borderBottomColor: "black",
    borderWidth: 2,
    height: 60,
    paddingHorizontal: 20,
    marginVertical: 15,
  },

  lowerView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    height: 65,
    marginVertical: 5,
  },
});

export default Account;
