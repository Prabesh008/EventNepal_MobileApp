import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { Formik, FormInput, Form } from "formik";
import * as Yup from "yup";
import IconInput from "../../components/IconInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native";
import ErrorMessage from "../../components/ErrorMessage";

import axios from "axios";

//Validation with yup
const validation = Yup.object().shape({
  name: Yup.string().required().min(5, "username should be longer"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6, "password too short"),
  confirmpassword: Yup.string()
    .required()
    .label("Password")
    .equals([Yup.ref("password"), null], "Password does not match!"),
});

const Registration = () => {
  //To handle registration

  const handleSignUp = (credentials) => {
    console.log(credentials);
    const url = "http://192.168.0.2:5000/api/auth/createuser";
    //10.0.2.2
    axios
      .post(url, credentials)
      .then((response) => {
        // console.log(response);
        const result = response.data.success;
        if (!result) {
          console.log("cannot register");
        } else {
          // navigation.navigate("Home");
          console.log("user registered successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function clearField() {
    console.log("clear the fucking input fields");
  }
  return (
    <View style={styles.outerContainer}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        onSubmit={(value) => {
          console.log(value);
          handleSignUp(value);
        }}
        validationSchema={validation}
      >
        {({
          handleChange,
          errors,
          handleSubmit,
          handleBlur,
          touched,
          setFieldTouched,
        }) => {
          return (
            <>
              {/* <View style={styles.viewHeader}>
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
              </View> */}

              <View style={{ backgroundColor: "grey" }}>
                <IconInput
                  style={styles.input}
                  placeholder="Enter name"
                  // value={username}
                  onChangeText={handleChange("name")}
                  onBlur={() => setFieldTouched("name")}
                  name="account"
                  size={30}
                ></IconInput>
                <ErrorMessage error={errors.name} visible={touched.name} />

                <IconInput
                  style={styles.input}
                  placeholder="Enter Email"
                  // value={email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  name="email"
                  size={30}
                ></IconInput>
                <ErrorMessage error={errors.email} visible={touched.email} />

                <IconInput
                  style={styles.input}
                  placeholder="Enter Password"
                  // value={password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  name="lock"
                  size={30}
                ></IconInput>
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />

                <IconInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  // value={confirmpassword}
                  onChangeText={handleChange("confirmpassword")}
                  onBlur={() => setFieldTouched("confirmpassword")}
                  name="lock"
                  size={30}
                ></IconInput>
                <ErrorMessage
                  error={errors.confirmpassword}
                  visible={touched.confirmpassword}
                />
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
    marginTop: 36,
    // backgroundColor: "blue",
  },

  viewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Registration;
