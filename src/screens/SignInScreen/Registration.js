import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import IconInput from "../../components/IconInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-web";

const validation = Yup.object().shape({
  username: Yup.string().required().min(5, "username is invalid"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6, "password too short"),
  confirmpassword: Yup.string().required().min(6, "password too short"),
});

const Registration = () => {
  return (
    <View style={styles.outerContainer}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validation}
      >
        {({ handleChange, errors, handleSubmit }) => {
          return (
            <>
              <View style={styles.viewHeader}>
                <MaterialCommunityIcons name="arrow-left" size={30} />

                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    marginVertical: 15,
                    marginLeft: 10,
                  }}
                >
                  Account Registration
                </Text>
              </View>

              <View>
                <IconInput
                  style={styles.input}
                  placeholder="Enter Username"
                  // value={username}
                  onChangeText={handleChange("username")}
                  name="account"
                  size={30}
                ></IconInput>
                <Text style={{ color: "red" }}>{errors.username}</Text>

                <IconInput
                  style={styles.input}
                  placeholder="Enter Email"
                  // value={email}
                  onChangeText={handleChange("email")}
                  name="email"
                  size={30}
                ></IconInput>
                <Text style={{ color: "red" }}>{errors.email}</Text>

                <IconInput
                  style={styles.input}
                  placeholder="Enter Password"
                  // value={password}
                  onChangeText={handleChange("password")}
                  name="lock"
                  size={30}
                ></IconInput>
                <Text style={{ color: "red" }}>{errors.password}</Text>

                <IconInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  // value={confirmpassword}
                  onChangeText={handleChange("confirmpassword")}
                  name="lock"
                  size={30}
                ></IconInput>
                <Text style={{ color: "red", marginBottom: 30 }}>
                  {errors.confirmpassword}
                </Text>
              </View>
              <View>
                <Button title="Register" onPress={handleSubmit}></Button>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    // borderColor: "black",
    height: 50,
    width: "90%",
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  outerContainer: {
    padding: 10,
  },

  viewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Registration;
