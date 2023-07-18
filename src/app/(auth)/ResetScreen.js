import React, { memo } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { Back, Button, Header, Input } from "../components";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import API_BASE_URL from "../constants";

const ResetScreen = () => {
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^\+234[789]\d{9}$/,
        "Invalid Nigerian phone number input country code"
      ),
  });

  const handleSubmitForm = async (values) => {
    try {
      let requestData = JSON.stringify({
        phone_number: values.phoneNumber,
      });

      // Perform a POST request to the server to save the PIN
      const response = await axios.post(
        `${API_BASE_URL}requestotp`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { phone_number, otp } = JSON.parse(response.data);
      // Replace the route after successful signup
      router.replace({
        pathname: "/OTPScreen",
        params: {
          phone_number,
          otp,
        },
      });
    } catch (error) {
      console.error("Error sending otp", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Reset your 4 digit PIN"}
            subHeading={
              "Please enter the phone number to the account to recieve reset link"
            }
          />
          <Formik
            initialValues={{
              phoneNumber: "",
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
                <Button onPress={handleSubmit} margin>
                  Reset
                </Button>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default memo(ResetScreen);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
});
