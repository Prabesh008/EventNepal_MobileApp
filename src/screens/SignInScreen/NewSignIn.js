import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  Colors,
  StyledTextInput,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../../components/styles";
import { Formik } from "formik";
//API Client
import axios from "axios";
import { View } from "react-native";
//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import ErrorMessage from "../../components/ErrorMessage";

import * as Yup from "yup";

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "../../components/KeyBoardAvoidingWrapper";
import AuthContext from "../../Context/authContext";

//colors
const { brand, darkLight, primary } = Colors;

const validation = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6, "password too short")
    .label("Password"),
});

const NewSignIn = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const authContext = useContext(AuthContext);

  // extracting the loggedin user details
  const getUserData = async (authtoken) => {
    // API Call
    try {
      const response = await fetch("http://192.168.0.4:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      });
      const json = await response.json();
      authContext.setUser(json);
    } catch {
      console.log("Couldn't fetch the user details list");
    }
  };
  // authContext.setUser(user);

  //To handle the login
  const handleLogin = (credentials) => {
    console.log(credentials);
    // const url = "http://10.0.2.2:5000/api/auth/userlogin";
    // const url = "http://192.168.0.4:5000/api/auth/userlogin";
    const url = "http://192.168.0.4:5000/api/auth/userlogin";

    axios
      .post(url, credentials)
      .then((response) => {
        // console.log(response);
        const result = response.data.success;
        if (!result) {
          console.log("Couldn't signin");
        } else {
          const data = response.data.authtoken;
          getUserData(data);
          // navigation.navigate("Home");
        }
      })
      .catch((error) => {
        // console.log("There is an error");
        alert("Password or email does not match");
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("../../../assets/images/icon.png")}
          />
          <PageTitle>Event Nepal</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              handleLogin(values);
              console.log(values);
            }}
            validationSchema={validation}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              values,
              touched,
              setFieldTouched,
            }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="example@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <ErrorMessage error={errors.email} visible={touched.email} />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="*******"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto
                    name="google"
                    color={primary}
                    size={25}
                    style={{ marginRight: 15 }}
                  />
                  <ButtonText>Sign In with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("Register")}>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default NewSignIn;
