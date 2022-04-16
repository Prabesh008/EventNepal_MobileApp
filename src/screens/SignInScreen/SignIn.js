import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Logo from "../../../assets/images/icon.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import IconInput from "../../components/IconInput";
import SocialButton from "../../components/SocialButton";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//API Client
import axios from "axios";
import * as Google from "expo-google-app-auth";
// import { Alert } from "react-native";
import ErrorMessage from "../../components/ErrorMessage";
import { clear } from "react-native/Libraries/LogBox/Data/LogBoxData";

const validation = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6, "password too short")
    .label("Password"),
});

const SignIn = ({ navigation }) => {
  //To handle the login
  const handleLogin = (credentials) => {
    console.log(credentials);
    // const url = "http://10.0.2.2:5000/api/auth/userlogin";
    // const url = "http://192.168.0.4:5000/api/auth/userlogin";
    const url = "http://192.168.0.2:5000/api/auth/userlogin";

    axios
      .post(url, credentials)
      .then((response) => {
        // console.log(response);
        const result = response.data.success;
        if (!result) {
          console.log("cannot login");
        } else {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        // console.log("There is an error");
        alert("Password or email does not match");
      });
  };

  //Google SignIn code

  const handleGoogleSignin = () => {
    const config = {
      iosClientId: `289986232685-5q3f2ij39vraufj3vkl1t1061hijhdjg.apps.googleusercontent.com`,
      androidClientId: `289986232685-3439u35g8k1j674u4mpljud5vobat6du.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config).then((result) => {
      const { type, user } = result;

      if (type == "success") {
        console.log("Google Signup Successful");
        setTimeout(() => {
          navigation.navigate("Home");
        }, 1000);
      } else {
        console.log("Google Signup Unsuccessful");
      }
    });
  };

  // const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => {
          // navigation.navigate("Home");
          handleLogin(value);
          console.log(value);
        }}
        validationSchema={validation}
      >
        {({
          handleSubmit,
          handleChange,
          errors,
          touched,
          setFieldTouched,
          onBlur,
          isPassword,
        }) => {
          return (
            <>
              {/* <IconInput
                placeholder="Email"
                // name="email"
                // size={30}
                onChangeText={handleChange("email")}
              />
              <Text style={{ color: "red" }}>{errors.email}</Text>

              <IconInput
                placeholder="Password"
                // name="lock"
                // size={30}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              /> */}
              <View style={styles.textcontainer}>
                <MaterialCommunityIcons
                  name="email"
                  size={30}
                  style={{ marginRight: 5 }}
                ></MaterialCommunityIcons>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Username or email"
                  // value={username}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                ></TextInput>
              </View>

              <ErrorMessage error={errors.email} visible={touched.email} />
              {/* <Text style={{ color: "red", marginVertical: 10 }}>
                {errors.email}
              </Text> */}

              <View style={styles.textcontainer}>
                <MaterialCommunityIcons
                  name="lock"
                  size={30}
                  style={{ marginRight: 5 }}
                ></MaterialCommunityIcons>
                <TextInput
                  // keyboardType="numeric"
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Enter password"
                  // value={username}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                ></TextInput>
              </View>

              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              {/* <Text style={{ color: "red", marginVertical: 10 }}>
                {errors.password}
              </Text> */}

              {/* <CustomButton text="Login" onPress={handleSubmit} /> */}

              <View style={{ width: "100%", marginVertical: 10 }}>
                <Button title="Login" onPress={handleSubmit}></Button>
              </View>

              <SocialButton
                style={styles.google}
                text="Signin With Google"
                name="google"
                size={30}
                color="green"
                onPress={handleGoogleSignin}
              />
              <SocialButton
                style={styles.facebook}
                text="Signin With Facebook"
                name="facebook"
                size={30}
                color="blue"
              />
            </>
          );
        }}
      </Formik>
      <Text>
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: "purple" }}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "70%",
    maxWidth: 300,
    height: 150,
    maxHeight: 200,
    marginBottom: 10,
  },

  root: {
    alignItems: "center",
    padding: 10,
  },

  google: {
    backgroundColor: "orange",
  },
  facebook: {
    backgroundColor: "dodgerblue",
    marginBottom: 10,
  },

  input: {
    // borderWidth: 1,
    // borderColor: "black",
    height: 50,
    width: "88%",
    marginVertical: 5,
    paddingHorizontal: 5,
  },

  textcontainer: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    paddingHorizontal: 3,
    borderRadius: 9,
    marginVertical: 10,
  },
});

export default SignIn;
