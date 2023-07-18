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
import { saveTokenToStorage } from "../../helpers/storage";
import { Link, router } from "expo-router";
import { useAuth } from "../../contexts/auth";

// Validation schema for login form
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(
      /^\+234[789]\d{9}$/,
      "Invalid Nigerian phone number input country code"
    ),
  pin: Yup.string()
    .required("PIN is required")
    .length(4, "PIN must be exactly 4 digits"),
});

const LoginScreen = () => {
  // Get the signIn function from the auth context
  const { signIn } = useAuth();
  // Function to handle login submission
  const handleSubmitForm = async (values) => {
    try {
      let requestData = JSON.stringify({
        phone_number: values.phoneNumber,
        pin: values.pin,
      });

      // Perform a POST request to the server to save the PIN
      const response = await axios.post(`${API_BASE_URL}login`, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Save the token to the storage
      const token = JSON.parse(response.token);
      await saveTokenToStorage(token);

      //  update the user context
      signIn(token);

      // Replace the route after successful PIN creation
      router.replace({
        pathname: "/HomeScreen",
      });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Welcome Back"}
            subHeading={"Enter your details to login"}
          />
          <Formik
            initialValues={{
              phoneNumber: "",
              pin: "",
            }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                <Input
                  label={"Phone Number"}
                  placeholder={"+2348162060070"}
                  type="telephoneNumber"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phoneNumber")}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && ( // If the form has been touched and the error message exists
                  <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
                )}

                <PinInput
                  label={"Enter your 4 digit PIN"}
                  onChangeText={handleChange("pin")}
                  value={values.pin}
                />
                {errors.pin && ( // If the form has been touched and the error message exists
                  <Text style={{ color: "red" }}>{errors.pin}</Text>
                )}
                <Button onPress={handleSubmit} margin>
                  Login
                </Button>
              </>
            )}
          </Formik>
          <Link href="/ResetScreen" asChild>
            <View style={styles.forgot_pin}>
              <Text style={styles.forgot_pin_text}>{"Forgot PIN ?"}</Text>
            </View>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  forgot_pin: {
    width: "100%",
  },
  forgot_pin_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e3d77",
  },
});

export default memo(LoginScreen);
