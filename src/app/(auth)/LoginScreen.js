import React, { memo } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";
import { Back, Button, Header, Input, PinInput } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import API_BASE_URL from "../../constants";
import { Link, router } from "expo-router";
import { useAuth } from "../../contexts/auth";

const LoginScreen = () => {
  const auth = useAuth(); // Get the signIn function from the auth context

  const handleSubmitForm = async (values) => {
    try {
      let requestData = JSON.stringify({
        phone_number: values.phoneNumber,
        pin: values.pin.join(""),
      });

      // Perform a POST request to the server to save the PIN
      const response = await axios.post(`${API_BASE_URL}login`, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Save the token to the storage
      const token = response.data.token;
      // Update the user context
      auth.signIn(token);

      // Replace the route after successful PIN creation
      router.replace({
        pathname: "/HomeScreen",
      });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^\+234[789]\d{9}$/,
        "Invalid Nigerian phone number input country code"
      ),
    pin: Yup.array()
      .required("PIN is required")
      .of(Yup.string().matches(/^[0-9]+$/, "PIN must be digits"))
      .length(4),
  });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading="Welcome Back"
            subHeading="Enter your details to login"
          />
          <Formik
            initialValues={{
              phoneNumber: "",
              pin: ["", "", "", ""],
            }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({
              setFieldValue,
              handleChange,
              handleSubmit,
              values,
              errors,
            }) => (
              <>
                <Input
                  label="Phone Number"
                  placeholder="+2348162060070"
                  type="telephoneNumber"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phoneNumber")}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && (
                  <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                )}

                <PinInput
                  label="Enter your 4-digit PIN"
                  onChangeText={handleChange("pin")}
                  pin={values.pin}
                  setPin={(value) => setFieldValue("pin", value)}
                />
                {errors.pin && (
                  <Text style={styles.errorText}>
                    {errors.pin + " " + values.pin}
                  </Text>
                )}
                <Button onPress={handleSubmit} margin>
                  Login
                </Button>
              </>
            )}
          </Formik>
          <Link href="/ResetScreen" asChild>
            <View style={styles.forgotPin}>
              <Text style={styles.forgotPinText}>Forgot PIN?</Text>
            </View>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  forgotPin: {
    width: "100%",
  },
  forgotPinText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e3d77",
  },
  errorText: {
    color: "red",
  },
});

export default memo(LoginScreen);
