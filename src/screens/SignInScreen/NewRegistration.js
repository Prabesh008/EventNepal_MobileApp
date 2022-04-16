import React, { useState } from "react";
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
import { View } from "react-native";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";

import * as Yup from "yup";
//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "../../components/KeyBoardAvoidingWrapper";

//colors
const { brand, darkLight, primary } = Colors;

const NewRegistration = () => {
  const [hidePassword, setHidePassword] = useState(true);

  //Validation with yup
  const validation = Yup.object().shape({
    fullname: Yup.string().required(),
    username: Yup.string().required().min(5, "username should be longer"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6, "password too short"),
    confirmpassword: Yup.string()
      .required()
      .label("Password")
      .equals([Yup.ref("password"), null], "Password does not match!"),
  });

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
        alert(error.data);
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          {/* <PageLogo
          resizeMode="cover"
          source={require("../../../assets/images/icon.png")}
        /> */}
          <PageTitle>Event Nepal</PageTitle>
          <SubTitle>Account Signup</SubTitle>
          <Formik
            initialValues={{
              fullname: "",
              username: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            onSubmit={(values) => {
              handleSignUp(values);
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
                  label="Full Name"
                  icon="person"
                  placeholder="Mcmohan Startlespoon"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("fullname")}
                  onBlur={() => setFieldTouched("fullname")}
                  value={values.fullname}
                />
                <ErrorMessage
                  error={errors.fullname}
                  visible={touched.fullname}
                />

                <MyTextInput
                  label="Username"
                  icon="person"
                  placeholder="Lukamagic83"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("username")}
                  onBlur={() => setFieldTouched("username")}
                  value={values.username}
                />
                <ErrorMessage
                  error={errors.username}
                  visible={touched.username}
                />

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

                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="*******"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmpassword")}
                  onBlur={() => setFieldTouched("confirmpassword")}
                  value={values.confirmpassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <ErrorMessage
                  error={errors.confirmpassword}
                  visible={touched.confirmpassword}
                />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Sign up</ButtonText>
                </StyledButton>
                <Line />
                <ExtraView>
                  <ExtraText>Already have an account?</ExtraText>
                  <TextLink>
                    <TextLinkContent>Login</TextLinkContent>
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
export default NewRegistration;
